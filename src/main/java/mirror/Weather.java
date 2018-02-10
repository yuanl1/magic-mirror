package mirror;

public class Weather {

    private final int temp;
    private final int high;
    private final int low;
    private final String date;
    private final String description;

    public Weather(int temp, int high, int low, String date, String description) {
        this.temp = temp;
        this.high = high;
        this.low = low;
        this.date = date;
        this.description = description;
    }

    public int getTemp() {
        return temp;
    }

    public int getHigh() {
        return high;
    }

    public int getLow() {
        return low;
    }

    public String getDate() {
        return date;
    }

    public String getDescription() {
        return description;
    }
}