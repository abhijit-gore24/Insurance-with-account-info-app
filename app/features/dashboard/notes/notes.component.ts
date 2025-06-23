import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  imports: [FormsModule, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  updates: any[] = [];
  newNote: string = '';
  @Output() closeModal = new EventEmitter<void>();

  // Sorting properties
  sortDirection: 'asc' | 'desc' = 'asc';
  sortColumn: 'date' | 'description' | '' = '';
  currentPage = 1;
  itemsPerPage = 5;

  get paginatedUpdates() {
    const sortedUpdates = this.sortColumn ? this.sortUpdates([...this.updates]) : this.updates;
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return sortedUpdates.slice(start, start + this.itemsPerPage);
  }

  sortUpdates(updates: any[]) {
    return updates.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      if (this.sortColumn === 'date') {
        aValue = new Date(a.date);
        bValue = new Date(b.date);
      } else if (this.sortColumn === 'description') {
        aValue = a.description.toLowerCase();
        bValue = b.description.toLowerCase();
      }

      if (aValue < bValue) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  toggleSort(column: 'date' | 'description') {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.currentPage = 1; // Reset to first page when sorting
  }

  onCancel(): void {
    this.closeModal.emit();
  }

  get totalPages() {
    return Math.ceil(this.updates.length / this.itemsPerPage);
  }

  getTodayDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  saveNote() {
    if (this.newNote.trim()) {
      this.updates.push({
        date: this.getTodayDate(),
        description: this.newNote.trim(),
        isEditing: false,
      });
      this.newNote = '';
      this.currentPage = this.totalPages; // Jump to last page
    }
  }

  clearNote() {
    this.newNote = '';
  }

  toggleEdit(row: any) {
    row.isEditing = !row.isEditing;
  }

  deleteRow(index: number) {
    const globalIndex = (this.currentPage - 1) * this.itemsPerPage + index;
    this.updates.splice(globalIndex, 1);
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
  }
}
