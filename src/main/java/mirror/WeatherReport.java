package mirror;

public class WeatherReport {

    private Weather condition;

    public WeatherReport(Weather condition) {
        this.condition = condition;
    }

    public Weather getCondition() {
        return condition;
    }
}