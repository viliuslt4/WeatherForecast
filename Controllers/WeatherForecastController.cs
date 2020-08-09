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
            string path = System.Web.HttpContext.Current.Request.MapPath(@"~/Database/WeatherForecast.json");
            List<CityWeatherForecast> WeatherForecast = new List<CityWeatherForecast>();
            
            using (StreamReader r = new StreamReader(path))
            {
                string jsonString = r.ReadToEnd();
                WeatherForecast = JsonConvert.DeserializeObject<List<CityWeatherForecast>>(jsonString);
            }
            WeatherForecast = WeatherForecast.Where(x => x.City == city).ToList();
            DateTime dateEnd = date.AddDays(7);
            var ListForecast = WeatherForecast[0].WeatherForecastList.Where(x => x.Date >= date && x.Date < dateEnd).ToList();
            WeatherForecast[0].WeatherForecastList = ListForecast;

            var response = new {
                data = WeatherForecast[0]
            };
            return Json(response);
        }
    }
}
