import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../../core/services/project.service';
import { RecordService } from '../../../core/services/record.service';
import { RateAction } from '../rate-action-card/rate-action.model';
import { RateActionCardComponent } from "../rate-action-card/rate-action-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [RateActionCardComponent, CommonModule],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {
  constructor(private router: Router,
    private ps: ProjectService,
    private rs: RecordService) { }

  toCreateNewAction() {
    this.router.navigate(["/dashboard/createAction"]);
  }

  rateActions: RateAction[] = [
    {
      title: 'Rate Action - WI',
      description: 'Rate Programs',
      ratePrograms: [
        { name: 'Legacy', status: 'In Review' },
        { name: 'UNI 23', status: 'In progress' },
        { name: 'UNI', status: 'Submitted' }
      ],
      modifiedBy: 'David Peterson',
      createdBy: 'David Peterson',
      updatedDaysBefore: 2
    },
    {
      title: 'Rate Action - MD',
      description: 'Rate Programs',
      ratePrograms: [
        { name: 'Legacy', status: 'In Review' },
        { name: 'UNI 23', status: 'Submitted' }
      ],
      modifiedBy: 'David Peterson',
      createdBy: 'Patrick Anderson',
      updatedDaysBefore: 10
    },
    {
      title: 'Rate Action - FL',
      description: 'Rate Programs',
      ratePrograms: [
        { name: 'Legacy', status: 'In progress' },
      ],
      modifiedBy: 'David Peterson',
      createdBy: 'David King',
      updatedDaysBefore: 11
    },
    {
      title: 'Rate Action - GA',
      description: 'Rate Programs',
      ratePrograms: [
        { name: 'Legacy', status: 'In Review' },
        { name: 'UNI 23', status: 'In progress' },
        { name: 'UNI', status: 'In progress' }
      ],
      modifiedBy: 'David Peterson',
      createdBy: 'Stephanie Smith',
      updatedDaysBefore: 15
    },
    {
      title: 'Rate Action - DC',
      description: 'Rate Programs',
        ratePrograms: [
        { name: 'Legacy', status: 'In progress' },
      ],
      modifiedBy: 'David Peterson',
      createdBy: 'Stephanie Smith',
      updatedDaysBefore: 17
    },
    {
      title: 'Rate Action - TN',
      description: 'Rate Programs',
       ratePrograms: [
        { name: 'Legacy', status: 'In Review' },
        { name: 'UNI 23', status: 'In progress' },
        { name: 'UNI', status: 'In progress' }
      ],
      modifiedBy: 'David Peterson',
      createdBy: 'David King',
      updatedDaysBefore: 20
    },
    {
      title: 'Rate Action - TX',
      description: 'Rate Programs',
     ratePrograms: [
        { name: 'Legacy', status: 'In Review' },
        { name: 'UNI 23', status: 'In progress' }
      ],
      modifiedBy: 'David Peterson',
      createdBy: 'Patrick Anderson',
      updatedDaysBefore: 22
    }
  ];
}
