export interface WeatherForecast extends Forecast{
    City: string;
    WeatherForecastList: Forecast[]
}
export interface Forecast extends Temperature, WindInfo{
    Date: Date;
    WeatherConditions: string;
    Temperature: Temperature;
    Precipitation: number;
    Wind: WindInfo;
}
export interface Temperature{
    Day: string;
    Night: string;
}
export interface WindInfo{
    Direction: string;
    Strength: number;
}