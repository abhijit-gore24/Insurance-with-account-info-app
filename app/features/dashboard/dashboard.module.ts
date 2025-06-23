import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CreateRateActionComponent } from '../rate-action/create-rate-action/create-rate-action.component';
import { ProjectService } from '../../core/services/project.service';
import { RecordService } from '../../core/services/record.service';
import { RateActionCardComponent } from './rate-action-card/rate-action-card.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CreateRateActionComponent,
    RateActionCardComponent
  ],
  providers:[ProjectService,RecordService]
})
export class DashboardModule { }
