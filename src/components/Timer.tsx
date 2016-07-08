import * as React from "react";

export interface TimerState { secondsElapsed: number }

export class Timer extends React.Component<{}, TimerState> {
    private interval: any;

    constructor(props: {}, context: TimerState) {
        super(props, context);
        this.state = { secondsElapsed: 0 };
    }

    tick() {
        this.setState({secondsElapsed: this.state.secondsElapsed + 1})
    }
    
    componentDidMount() {
        // special way to set a timer
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return <div>Seconds Elapsed: {this.state.secondsElapsed}</div>;
    }
}
