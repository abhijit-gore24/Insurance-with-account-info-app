import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CnaDashboardHomeComponent } from './cna-dashboard-home/cna-dashboard-home.component';

const routes: Routes = [
  {
    path: '',
    component: CnaDashboardHomeComponent,
  },
  {
    path: 'cnaRateActionCard',
    component: CnaDashboardHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CnaDashboardRoutingModule {}
