import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CnaDashboardRoutingModule } from './cna-dashboard-routing.module';
import { CnaRateActionCardComponent } from './cna-rate-action-card/cna-rate-action-card.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, CnaDashboardRoutingModule,CnaRateActionCardComponent],
  exports:[]
})
export class CnaDashboardModule {}
