import React from 'react';
import './Weather.css';
import moment from 'moment';

class Weather extends React.Component {
    render() {
        const {data} = this.props;
        const {condition} = data;
        const {temp, high, low, date, description} = condition;
        const formattedDate = moment(date).format("MMMM Do YYYY, h:mm:ss a")

        return (
            <div>
                <div><h1>Hi Kevin!</h1></div>
                <div><h2>Today is {formattedDate}</h2></div>
                <div><h2>The current temperature is {temp}°F</h2></div>
                <div><h2>The high is {high}°F</h2></div>
                <div><h2>The low is {low}°F</h2></div>
                <div><h2>It is {description} outside</h2></div>
            </div>
        );
    }
}

export default Weather;
