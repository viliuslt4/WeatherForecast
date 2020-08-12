import { Component, OnInit } from '@angular/core';
import { Cities } from '../../Models/cities.model';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.scss']
})
export class SelectCityComponent implements OnInit {
  cities: Cities[] = [];
  city: string;
  interval: number = 7;
  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.loadCities();
    this.forecastService.intervalChange(this.interval);
  }
  loadCities(){
    this.forecastService.getListOfCities().subscribe(result=>{
      this.cities = result.data;
      this.city = this.cities[0].toString();
      this.forecastService.cityChange(this.city);
    });
  }
  onItemChange(value){
    if(this.city !== value){
      this.city = value;
      this.forecastService.cityChange(this.city);
    }
  }
  onIntervalChange(value){
    if(this.interval !== value){
      this.interval = value;
      this.forecastService.intervalChange(this.interval);
    }
  }
}
