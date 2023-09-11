import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InpectionCreatedComponent } from './inpection-created.component';

describe('InpectionCreatedComponent', () => {
  let component: InpectionCreatedComponent;
  let fixture: ComponentFixture<InpectionCreatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InpectionCreatedComponent]
    });
    fixture = TestBed.createComponent(InpectionCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
