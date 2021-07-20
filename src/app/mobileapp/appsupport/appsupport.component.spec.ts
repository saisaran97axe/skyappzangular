import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppsupportComponent } from './appsupport.component';

describe('AppsupportComponent', () => {
  let component: AppsupportComponent;
  let fixture: ComponentFixture<AppsupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppsupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
