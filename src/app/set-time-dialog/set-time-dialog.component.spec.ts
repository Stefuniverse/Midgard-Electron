import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTimeDialogComponent } from './set-time-dialog.component';

describe('SetTimeDialogComponent', () => {
  let component: SetTimeDialogComponent;
  let fixture: ComponentFixture<SetTimeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTimeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTimeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
