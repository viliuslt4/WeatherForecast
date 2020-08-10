using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web.Http;
using WeatherForecast.Models;

namespace WeatherForecast.Controllers
{
    public class WeatherForecastController : ApiController
    {
        // api/WeatherForecast/GetWeatherForecast?date=2020/08/10&city=Vilnius
        // ?date=2020/08/09&city="Vilnius"
        [HttpGet]
        public object GetWeatherForecast(DateTime date, string city)
        {
            List<CityWeatherForecast> WeatherForecast = new List<CityWeatherForecast>();

            WeatherForecast = ReadWeatherForecast();
            WeatherForecast = WeatherForecast.Where(x => x.City == city).ToList();
            DateTime dateEnd = date.AddDays(7);
            var ListForecast = WeatherForecast[0].WeatherForecastList.Where(x => x.Date >= date && x.Date < dateEnd).ToList();
            WeatherForecast[0].WeatherForecastList = ListForecast;

            var response = new {
                data = WeatherForecast[0]
            };

            return Json(response);
        }
        [HttpGet]
        public object GetAllAvailableCities()
        {
            List<CityWeatherForecast> WeatherForecast = new List<CityWeatherForecast>();
            List<string> cities = new List<string>();

            WeatherForecast = ReadWeatherForecast();
            foreach(var cityforecast in WeatherForecast)
            {
                cities.Add(cityforecast.City);
            }
            var response = new
            {
              data = cities
            };

            return Json(response);
        }
        private List<CityWeatherForecast> ReadWeatherForecast()
        {
            string path = System.Web.HttpContext.Current.Request.MapPath(@"~/Database/WeatherForecast.json");
            List<CityWeatherForecast> ListWeatherForecast = new List<CityWeatherForecast>();

            using (StreamReader r = new StreamReader(path))
            {
                string jsonString = r.ReadToEnd();
                ListWeatherForecast = JsonConvert.DeserializeObject<List<CityWeatherForecast>>(jsonString);
            }

            return ListWeatherForecast;
        }
    }
}
