import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateActionDetailsComponent } from './rate-action-details.component';

describe('RateActionDetailsComponent', () => {
  let component: RateActionDetailsComponent;
  let fixture: ComponentFixture<RateActionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateActionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateActionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
