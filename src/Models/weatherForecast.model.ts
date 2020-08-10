export interface WeatherForecast extends Forecast{
    City: string;
    WeatherForecastList: Forecast[]
}
export interface Forecast extends Temperature{
    Date: Date;
    WeatherConditions: string;
    Temperature: Temperature;
}
export interface Temperature{
    Day: string;
    Night: string;
}