import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notification',
  imports: [FormsModule, CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
  @Output() closeModal = new EventEmitter<void>();
  sortDirection: 'asc' | 'desc' = 'asc';
  sortColumn: 'date' | 'description' | '' = '';

  notifications = [
    {
      date: '04-05-2025',
      description: `'Buy Back % of GPV' for 'LILCA-Phase-20' value changed from "90%" to "100%"`,
      action: '',
      rejectReason: '',
    },
    {
      date: '10-05-2025',
      description: `Projection Number of Years' value changed from "2" to "3"`,
      action: 'Approve',
      rejectReason: '',
    },
    {
      date: '11-05-2025',
      description: `Projection Number of Years' value changed from "4" to "5"`,
      action: 'Reject',
      rejectReason: `Keep the Projection Number of Years' `,
    },
    {
      date: '12-05-2025',
      description: `Status changed from "Submitted" to "In Review"`,
      action: '',
      rejectReason: '',
    },
    {
      date: '13-05-2025',
      description: `Status changed from "Submitted" to "In Review"`,
      action: 'Reject',
      rejectReason: '',
    },
    {
      date: '14-05-2025',
      description: `Status changed from "Submitted" to "In Review"`,
      action: 'Reject',
      rejectReason: '',
    },
  ];

  currentPage = 1;
  itemsPerPage = 5;

  autoResize(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  get totalPages() {
    return Math.ceil(this.notifications.length / this.itemsPerPage);
  }

  get paginatedUpdates() {
    const sortedNotifications = this.sortColumn ? this.sortNotifications([...this.notifications]) : this.notifications;
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return sortedNotifications.slice(start, start + this.itemsPerPage);
  }

  sortNotifications(notifications: any[]) {
    return notifications.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      if (this.sortColumn === 'date') {
        // Convert DD-MM-YYYY to proper date format
        const [dayA, monthA, yearA] = a.date.split('-');
        const [dayB, monthB, yearB] = b.date.split('-');
        aValue = new Date(`${yearA}-${monthA}-${dayA}`);
        bValue = new Date(`${yearB}-${monthB}-${dayB}`);
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

  goToPage(page: number) {
    this.currentPage = page;
  }
}
