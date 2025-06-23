import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnaRateActionCardComponent } from './cna-rate-action-card.component';

describe('CnaRateActionCardComponent', () => {
  let component: CnaRateActionCardComponent;
  let fixture: ComponentFixture<CnaRateActionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CnaRateActionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnaRateActionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
