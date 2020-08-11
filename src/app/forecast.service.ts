import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Request } from '../Models/request.model';
import { BehaviorSubject, Subject } from 'rxjs';
//import {fore} from '../'

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  
  private citySource = new Subject<any>();
  city = this.citySource.asObservable();
  // citySource = new BehaviorSubject('');
  //city = this.citySource.asObservable();
  //city = "";
  //citySource: Subject<any> = new Subject<any>();
  
  constructor(private http: HttpClient) { }

  public getWeatherForecast(request: Request){
    return this.http.get<any>(environment.host + 'api/WeatherForecast/GetWeatherForecast?date='+ request.date +'&city='+ request.city);
  }
  public getListOfCities(){
    return this.http.get<any>(environment.host + 'api/WeatherForecast/GetAllAvailableCities');
  }
  cityChange(city:string){
    //this.citySource = new Subject<any>();
    //this.citySource.next(city);
    //this.citySource.complete();
    this.citySource.next(city);
    //this.citySource.complete();
  }
}
