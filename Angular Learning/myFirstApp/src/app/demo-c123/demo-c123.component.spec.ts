import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoC123Component } from './demo-c123.component';

describe('DemoC123Component', () => {
  let component: DemoC123Component;
  let fixture: ComponentFixture<DemoC123Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoC123Component]
    });
    fixture = TestBed.createComponent(DemoC123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
