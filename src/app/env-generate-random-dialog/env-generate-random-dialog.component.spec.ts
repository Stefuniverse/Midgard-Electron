import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvGenerateRandomDialogComponent } from './env-generate-random-dialog.component';

describe('EnvGenerateRandomDialogComponent', () => {
  let component: EnvGenerateRandomDialogComponent;
  let fixture: ComponentFixture<EnvGenerateRandomDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvGenerateRandomDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvGenerateRandomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
