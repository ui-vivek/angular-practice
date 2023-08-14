import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTempelateComponent } from './inline-tempelate.component';

describe('InlineTempelateComponent', () => {
  let component: InlineTempelateComponent;
  let fixture: ComponentFixture<InlineTempelateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineTempelateComponent]
    });
    fixture = TestBed.createComponent(InlineTempelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
