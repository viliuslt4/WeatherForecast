using System;
using System.Collections.Generic;

namespace WeatherForecast.Models
{
    public class CityWeatherForecast
    {
        public string City { get; set; }
        public List<Forecast> WeatherForecastList { get; set; }
    }
    public class Forecast
    {
        public DateTime Date { get; set; }
        public string WeatherConditions { get; set; }
        public Temperature Temperature { get; set; }
        
    }
    public class Temperature {
        public int Day { get; set; }
        public int Night { get; set; }
    }
}
