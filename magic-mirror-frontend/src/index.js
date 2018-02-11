import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './Weather';
import './index.css';

const WIDGET_ENUM = {
    EMPTY: 'empty',
    WEATHER: 'weather',
    SUBWAY: 'subway',
    TWITTER: 'twitter',
};

const POLL_INTERVAL = 500;
const RESET_WIDGET_INTERVAL = 30 * 1000;

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     widget: WIDGET_ENUM.EMPTY,
        //     data: {},
        // };

        this.state = {
          widget: WIDGET_ENUM.WEATHER,
          data: {"condition":{"temp":45,"high":49,"low":37,"date":"Sat Feb 10 23:00:00 UTC 2018","description":"Cloudy"}},
        };

        this.getCommand = this.getCommand.bind(this);
        this.renderWidget = this.renderWidget.bind(this);
    }

    componentDidMount() {
        this.intervalPointer = setInterval(this.getCommand, POLL_INTERVAL);
    }

    componentWillUnmount() {
        clearInterval(this.intervalPointer);
    }

    async getCommand() {
        try {
            // const res = await fetch('http://magic-mirror-app.herokuapp.com/getlastcommand');
            const res = await fetch('http://magic-mirror-app.herokuapp.com/getlastcommand');
            const body = await res.json();

            if ((Date.now() - body.timestamp) > RESET_WIDGET_INTERVAL) {
              this.setState({widget: WIDGET_ENUM.EMPTY, data: {}});
              return;
            }

            switch (body.command) {
              case WIDGET_ENUM.WEATHER:
                const weatherRes = await fetch('http://magic-mirror-app.herokuapp.com/weather');
                const weatherBody = await weatherRes.json();
                this.setState({data: weatherBody, widget: body.command});
              case WIDGET_ENUM.SUBWAY:
                break;
              case WIDGET_ENUM.TWITTER:
                break;
              default:
                break;
            }
        } catch (error) {
            console.log('Error!');
            console.log(error);
        }
    }

    renderWidget() {
        const {widget, data} = this.state;
        switch(widget) {
            case WIDGET_ENUM.WEATHER:
                return <Weather data={data} />;
            default:
                return <div></div>;
        }
    }

    render() {
      const widgetElement = this.renderWidget();

      return (
        <div className="game">
          <div className="game-board">
            {widgetElement}
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}

ReactDOM.render(
<Dashboard />,
document.getElementById('root')
);