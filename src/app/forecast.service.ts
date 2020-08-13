import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Request } from '../Models/request.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private intervalSource = new Subject<any>();
  private citySource = new Subject<any>();
  private loaderSource = new Subject<any>();
  loader = this.loaderSource.asObservable();
  city = this.citySource.asObservable();
  interval = this.intervalSource.asObservable();

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
  intervalChange(interval:number){
    this.intervalSource.next(interval);
  }
  loaderChange(loader:boolean){
    this.loaderSource.next(loader);
  }
}
