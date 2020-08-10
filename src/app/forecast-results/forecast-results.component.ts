import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { Cities } from '../../Models/cities.model';
@Component({
  selector: 'app-forecast-results',
  templateUrl: './forecast-results.component.html',
  styleUrls: ['./forecast-results.component.scss']
})
export class ForecastResultsComponent implements OnInit {
  cities: Cities[];
  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.loadCities();
  }
  loadCities(){
    this.forecastService.getListOfCities().subscribe(result=>{
      this.cities = result.data;
      console.log(this.cities);
    });
  }
}
