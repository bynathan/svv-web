import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensCarModalComponent } from './itens-car-modal.component';

describe('ItensCarModalComponent', () => {
  let component: ItensCarModalComponent;
  let fixture: ComponentFixture<ItensCarModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItensCarModalComponent]
    });
    fixture = TestBed.createComponent(ItensCarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
