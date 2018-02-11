import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const WIDGET_ENUM = {
    EMPTY: 'empty',
    WEATHER: 'weather',
    SUBWAY: 'subway',
    TWITTER: 'twitter',
};

const POLL_INTERVAL = 500;

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            widget: WIDGET_ENUM.EMPTY,
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
            const res = await fetch('http://localhost:8080/greeting');
            const body = await res.json();
            console.log(body);
            this.setState({widget: body.command});
        } catch (error) {
            console.log('Error!');
            console.log(error);
        }
    }

    renderWidget() {
        const {widget} = this.state;
        switch(widget) {
            case WIDGET_ENUM.EMPTY:
                return <div>Empty</div>;
            case WIDGET_ENUM.WEATHER:
                return <div>Weather</div>;
            default:
                return <div>Empty</div>;
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