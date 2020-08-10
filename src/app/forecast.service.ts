import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Request } from '../Models/request.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private citySource = new BehaviorSubject('');
  city = this.citySource.asObservable();

  constructor(private http: HttpClient) { }

  public getWeatherForecast(request: Request){
    return this.http.get<any>(environment.host + 'api/WeatherForecast/GetWeatherForecast?date='+ request.date +'&city='+ request.city);
  }
  public getListOfCities(){
    return this.http.get<any>(environment.host + 'api/WeatherForecast/GetAllAvailableCities');
  }
  cityChange(city:string){
    this.citySource.next(city);
  }
}
