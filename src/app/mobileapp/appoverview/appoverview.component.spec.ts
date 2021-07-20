import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoverviewComponent } from './appoverview.component';

describe('AppoverviewComponent', () => {
  let component: AppoverviewComponent;
  let fixture: ComponentFixture<AppoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
