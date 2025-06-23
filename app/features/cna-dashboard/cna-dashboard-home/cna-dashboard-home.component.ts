import { Component } from '@angular/core';
import { CnaRateActionCardComponent } from '../cna-rate-action-card/cna-rate-action-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cna-dashboard-home',
  imports: [CnaRateActionCardComponent],
  templateUrl: './cna-dashboard-home.component.html',
  styleUrl: './cna-dashboard-home.component.css',
})
export class CnaDashboardHomeComponent {
  constructor(private router: Router) {}
  toCreateNewAction() {
    this.router.navigate(['/dashboard/cnaCreateAction']);
  }
}
