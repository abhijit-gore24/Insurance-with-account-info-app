import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RateAction } from '../../dashboard/rate-action-card/rate-action.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cna-rate-action-card',
  imports: [CommonModule],
  templateUrl: './cna-rate-action-card.component.html',
  styleUrl: './cna-rate-action-card.component.css'
})
export class CnaRateActionCardComponent {
 @Input() data!: RateAction;
 constructor(private router: Router){}

   toCreateNewAction() {
    this.router.navigate(["/dashboard/rateActionDetails"]);
  }

  getChunks(array: any[], chunkSize: number): any[][] {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
}
