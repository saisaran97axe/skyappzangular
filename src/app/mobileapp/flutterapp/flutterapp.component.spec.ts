import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlutterappComponent } from './flutterapp.component';

describe('FlutterappComponent', () => {
  let component: FlutterappComponent;
  let fixture: ComponentFixture<FlutterappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlutterappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlutterappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
