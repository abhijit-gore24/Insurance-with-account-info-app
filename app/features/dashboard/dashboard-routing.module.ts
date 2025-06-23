import { CnaRateActionCardComponent } from './../cna-dashboard/cna-rate-action-card/cna-rate-action-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CreateRateActionComponent } from '../rate-action/create-rate-action/create-rate-action.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NotesComponent } from './notes/notes.component';
import { NotificationComponent } from './notification/notification.component';
import { OpenQuestionComponent } from './open-question/open-question.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { ViewMoreDetailsComponent } from './view-more-details/view-more-details.component';
import { RateActionDetailsComponent } from './rate-action-details/rate-action-details.component';
import { CreateCampignActionComponent } from '../create-campign-action/create-campign-action.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
  },
  {
    path: 'createAction',
    component: CreateRateActionComponent,
  },
  {
    path: 'fileUpload',
    component: FileUploadComponent,
  },
  {
    path: 'notes',
    component: NotesComponent,
  },
  {
    path: 'notification',
    component: NotificationComponent,
  },
  {
    path: 'openQuestion',
    component: OpenQuestionComponent,
  },
  {
    path: 'viewDetails',
    component: ViewDetailsComponent,
  },
  {
    path: 'viewMoreDetails',
    component: ViewMoreDetailsComponent,
  },
  {
    path: 'rateActionDetails',
    component: RateActionDetailsComponent,
  },
  {
    path: 'cnaCreateAction',
    component: CreateCampignActionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
