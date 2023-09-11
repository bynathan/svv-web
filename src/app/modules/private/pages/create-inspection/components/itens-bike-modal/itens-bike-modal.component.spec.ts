import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensBikeModalComponent } from './itens-bike-modal.component';

describe('ItensBikeModalComponent', () => {
  let component: ItensBikeModalComponent;
  let fixture: ComponentFixture<ItensBikeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItensBikeModalComponent]
    });
    fixture = TestBed.createComponent(ItensBikeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
