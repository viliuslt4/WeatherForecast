import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { ForecastService } from './forecast.service';
import { SelectCityComponent } from './select-city/select-city.component';
import { ForecastResultsComponent } from './forecast-results/forecast-results.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkyconsModule } from 'ngx-skycons';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectCityComponent,
    ForecastResultsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    SkyconsModule
  ],
  providers: [ForecastService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
