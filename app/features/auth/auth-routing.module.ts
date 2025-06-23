import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CnaDashboardHomeComponent } from '../cna-dashboard/cna-dashboard-home/cna-dashboard-home.component';
const routes: Routes = [{ path: '', component: LoginComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
