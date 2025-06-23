import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTypeReferenceComponent } from './plan-type-reference.component';

describe('PlanTypeReferenceComponent', () => {
  let component: PlanTypeReferenceComponent;
  let fixture: ComponentFixture<PlanTypeReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanTypeReferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanTypeReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
