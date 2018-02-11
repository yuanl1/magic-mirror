import React from 'react';
import './Weather.css';

class Weather extends React.Component {
    render() {
        const {data} = this.props;
        const {condition} = data;
        const {temp, high, low, date, description} = condition;

        return (
            <div>
                <div>{date}</div>
                <div>{temp}</div>
                <div>{high}</div>
                <div>{low}</div>
                <div>{description}</div>
            </div>
        );
    }
}

export default Weather;
