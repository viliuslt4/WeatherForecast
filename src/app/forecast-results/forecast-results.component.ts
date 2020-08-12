import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { DatePipe } from '@angular/common';
import { Request } from '../../Models/request.model';
import { WeatherForecast } from '../../Models/weatherForecast.model';

@Component({
  selector: 'app-forecast-results',
  templateUrl: './forecast-results.component.html',
  styleUrls: ['./forecast-results.component.scss']
})
export class ForecastResultsComponent implements OnInit {
  request = new Request();
  weatherForecast: WeatherForecast;
  city: string;
  
  constructor(private forecastService: ForecastService, private datePipe: DatePipe) { 
    this.forecastService.city.subscribe(
      city => {this.request.city = city, this.loadWeatherForecast()},
      error => console.log(error)
    )
  }

  ngOnInit(): void { 
    this.request.date = this.datePipe.transform(new Date(),"yyyy/MM/dd");
  }
  loadWeatherForecast(){
    this.forecastService.getWeatherForecast(this.request).subscribe(
      response => { this.weatherForecast = response.data; console.log(this.weatherForecast);},
      error => console.log(error)
    );
  }
}
