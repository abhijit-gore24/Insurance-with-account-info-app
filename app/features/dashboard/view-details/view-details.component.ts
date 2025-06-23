import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css',
})
export class ViewDetailsComponent {
  currentPage = 1;
  itemsPerPage = 5;

  rows = [
    {
      bioType: 'Compound',
      currentGrowth: '5.00',
      futureGrowth: '0.00',
      requiredIncrease: '10.0',
      factor1: '1.00',
      factor2: '1.00',
      factor3: '4.00',
      factor4: '2.00',
      factor5: '1.20',
    },
    {
      bioType: 'Unlimited Simple',
      currentGrowth: '5.00',
      futureGrowth: '5.00',
      requiredIncrease: '5.00',
      factor1: '2.00',
      factor2: '3.00',
      factor3: '2.00',
      factor4: '1.00',
      factor5: '110',
    },
    // Add more sample data to test pagination
    {
      bioType: 'Compound',
      currentGrowth: '3.00',
      futureGrowth: '2.00',
      requiredIncrease: '8.0',
      factor1: '1.50',
      factor2: '1.25',
      factor3: '3.00',
      factor4: '1.50',
      factor5: '1.10',
    },
    {
      bioType: 'Unlimited Simple',
      currentGrowth: '4.00',
      futureGrowth: '3.00',
      requiredIncrease: '6.00',
      factor1: '1.75',
      factor2: '2.50',
      factor3: '2.25',
      factor4: '1.25',
      factor5: '105',
    },
    {
      bioType: 'Compound',
      currentGrowth: '6.00',
      futureGrowth: '1.00',
      requiredIncrease: '12.0',
      factor1: '2.00',
      factor2: '1.75',
      factor3: '5.00',
      factor4: '2.50',
      factor5: '1.30',
    },
    {
      bioType: 'Unlimited Simple',
      currentGrowth: '7.00',
      futureGrowth: '4.00',
      requiredIncrease: '7.00',
      factor1: '2.25',
      factor2: '3.25',
      factor3: '2.75',
      factor4: '1.75',
      factor5: '115',
    },
  ];

  get totalPages() {
    return Math.ceil(this.rows.length / this.itemsPerPage);
  }

  get paginatedRows() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.rows.slice(start, start + this.itemsPerPage);
  }

  deleteRow(index: number) {
    const globalIndex = (this.currentPage - 1) * this.itemsPerPage + index;
    this.rows.splice(globalIndex, 1);

    // Adjust current page if necessary
    if (this.currentPage > this.totalPages && this.totalPages > 0) {
      this.currentPage = this.totalPages;
    }
  }

  addRow() {
    this.rows.push({
      bioType: '',
      currentGrowth: '',
      futureGrowth: '',
      requiredIncrease: '',
      factor1: '',
      factor2: '',
      factor3: '',
      factor4: '',
      factor5: '',
    });

    // Navigate to the last page to show the new row
    this.currentPage = this.totalPages;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
