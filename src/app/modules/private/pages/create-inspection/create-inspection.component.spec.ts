import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInspectionComponent } from './create-inspection.component';

describe('CreateInspectionComponent', () => {
  let component: CreateInspectionComponent;
  let fixture: ComponentFixture<CreateInspectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInspectionComponent]
    });
    fixture = TestBed.createComponent(CreateInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
