import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnaDashboardHomeComponent } from './cna-dashboard-home.component';

describe('CnaDashboardHomeComponent', () => {
  let component: CnaDashboardHomeComponent;
  let fixture: ComponentFixture<CnaDashboardHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CnaDashboardHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnaDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
