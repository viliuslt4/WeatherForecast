using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;
using System.Web.Http;
using WeatherForecast.Models;

namespace WeatherForecast.Controllers
{
    public class WeatherForecastController : ApiController
    {
        // api/WeatherForecast/GetWeatherForecast
        [HttpGet]
        public object GetWeatherForecast()
        {
            string path = System.Web.HttpContext.Current.Request.MapPath(@"~/Database/WeatherForecast.json");
            List<CityWeatherForecast> appData = new List<CityWeatherForecast>();
            using (StreamReader r = new StreamReader(path))
            {
                string jsonString = r.ReadToEnd();
                appData = JsonConvert.DeserializeObject<List<CityWeatherForecast>>(jsonString);
            }
            
            var response = new {
                data = appData
            };
            return Json(response);
        }
    }
}
