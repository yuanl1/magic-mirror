package mirror;

import com.github.fedy2.weather.YahooWeatherService;
import com.github.fedy2.weather.YahooWeatherService.LimitDeclaration;
import com.github.fedy2.weather.data.Channel;
import com.github.fedy2.weather.data.Condition;
import com.github.fedy2.weather.data.Forecast;
import com.github.fedy2.weather.data.unit.DegreeUnit;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.bind.JAXBException;
import java.io.IOException;
import java.util.List;


@RestController
public class WeatherReportController {

    @RequestMapping("/weather")
    public WeatherReport weather(@RequestParam(value="location", defaultValue="New York, NY") String location) throws JAXBException, IOException {
        YahooWeatherService service = new YahooWeatherService();
        LimitDeclaration limitDeclaration = service.getForecastForLocation(location, DegreeUnit.FAHRENHEIT);
        List<Channel> channels = limitDeclaration.first(1);
        if(channels.size() == 0) {
            System.out.println("No weather data found for location");
        }
        // Condition contains current weather info, while forecasts contains weekly weather info.
        Condition weatherInfo = channels.get(0).getItem().getCondition();
        List<Forecast> forecasts = channels.get(0).getItem().getForecasts();
        Weather weather = new Weather(
                weatherInfo.getTemp(), forecasts.get(0).getHigh(), forecasts.get(0).getLow(),
                weatherInfo.getDate().toString(), weatherInfo.getText());
        return new WeatherReport(weather);
    }
}
