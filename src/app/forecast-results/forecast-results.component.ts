import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-forecast-results',
  templateUrl: './forecast-results.component.html',
  styleUrls: ['./forecast-results.component.scss']
})
export class ForecastResultsComponent implements OnInit {
  city:string;
  date= this.datePipe.transform(new Date(),"yyyy/MM/dd");
  constructor(private forecastService: ForecastService, private datePipe: DatePipe) { }

  ngOnInit(): void { 
    this.forecastService.city.subscribe(city => this.city = city);
    this.loadWeatherForecast();
  }
  loadWeatherForecast(){
    
  }
}
