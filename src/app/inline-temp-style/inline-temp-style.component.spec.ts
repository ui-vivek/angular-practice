import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTempStyleComponent } from './inline-temp-style.component';

describe('InlineTempStyleComponent', () => {
  let component: InlineTempStyleComponent;
  let fixture: ComponentFixture<InlineTempStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineTempStyleComponent]
    });
    fixture = TestBed.createComponent(InlineTempStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
