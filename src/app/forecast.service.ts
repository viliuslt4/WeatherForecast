import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ForecastRequest } from '../Models/forecast.model';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  public getWeatherForecast(request: ForecastRequest){
    return this.http.get<any>(environment.host + '/api/WeatherForecast/GetWeatherForecast?date='+ request.date +'&city='+ request.city);
  }
  public getListOfCities(){
    return this.http.get<any>(environment.host + '/api/WeatherForecast/GetAllAvailableCities');
  }
}
