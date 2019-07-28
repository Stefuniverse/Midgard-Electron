import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventviewerComponent } from './eventviewer.component';

describe('EventviewerComponent', () => {
  let component: EventviewerComponent;
  let fixture: ComponentFixture<EventviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
