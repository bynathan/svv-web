import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnImportantModalComponent } from './warn-important-modal.component';

describe('WarnImportantModalComponent', () => {
  let component: WarnImportantModalComponent;
  let fixture: ComponentFixture<WarnImportantModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarnImportantModalComponent]
    });
    fixture = TestBed.createComponent(WarnImportantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
