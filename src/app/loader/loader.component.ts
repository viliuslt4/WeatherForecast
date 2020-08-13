import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements OnInit {
  public loading: boolean = false;
  constructor(private forecastService: ForecastService) { 
    this.forecastService.loader.subscribe(
      loader => this.loading = loader,
      error => console.log(error)
    )
  }
  ngOnInit(): void {
  }

}
