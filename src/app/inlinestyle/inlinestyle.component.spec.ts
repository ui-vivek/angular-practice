import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinestyleComponent } from './inlinestyle.component';

describe('InlinestyleComponent', () => {
  let component: InlinestyleComponent;
  let fixture: ComponentFixture<InlinestyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlinestyleComponent]
    });
    fixture = TestBed.createComponent(InlinestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
