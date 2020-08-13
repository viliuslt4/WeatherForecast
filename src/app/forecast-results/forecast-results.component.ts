import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { DatePipe } from '@angular/common';
import { Request } from '../../Models/request.model';
import { WeatherForecast } from '../../Models/weatherForecast.model';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-forecast-results',
  templateUrl: './forecast-results.component.html',
  styleUrls: ['./forecast-results.component.scss']
})
export class ForecastResultsComponent implements OnInit {
  request = new Request();
  weatherForecast: WeatherForecast;
  city: string;
  interval: number;
  constructor(private forecastService: ForecastService, private datePipe: DatePipe) { 
    this.forecastService.city.subscribe(
      city => {this.request.city = city, this.loadWeatherForecast()},
      error => console.log(error)
    )
    this.forecastService.interval.subscribe(
      interval => this.interval = interval,
      error => console.log(error)
    )
  }

  ngOnInit(): void { 
    this.request.date = this.datePipe.transform(new Date(),"yyyy/MM/dd");
  }
  loadWeatherForecast(){
    this.forecastService.loaderChange(true);
    this.forecastService.getWeatherForecast(this.request).subscribe(
      response => {this.weatherForecast = response.data; this.forecastService.loaderChange(false);},
      error => {console.log(error); this.forecastService.loaderChange(false);}
    );
  }
}
