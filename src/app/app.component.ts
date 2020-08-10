import { Component } from '@angular/core';
import { SelectCityComponent } from './select-city/select-city.component';
import { ForecastResultsComponent } from './forecast-results/forecast-results.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WeatherForecast';
}
