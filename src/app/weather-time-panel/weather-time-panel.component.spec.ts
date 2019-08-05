import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTimePanelComponent } from './weather-time-panel.component';

describe('WeatherTimePanelComponent', () => {
  let component: WeatherTimePanelComponent;
  let fixture: ComponentFixture<WeatherTimePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherTimePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTimePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
