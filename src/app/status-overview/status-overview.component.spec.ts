import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusOverviewComponent } from './status-overview.component';

describe('StatusOverviewComponent', () => {
  let component: StatusOverviewComponent;
  let fixture: ComponentFixture<StatusOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
