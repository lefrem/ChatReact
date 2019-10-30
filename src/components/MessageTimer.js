import React,{Component} from 'react';

class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = { minutes: 0 };
    }
    
    tick() {
        this.setState(state => ({
            minutes: state.minutes + 1
        }));
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 60000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div
                style={{
                    fontSize: 10,
                    textAlign: "right",
                }}
            >
                Posted {this.state.minutes} minutes
            </div>
        );
    }
}

export default Timer;