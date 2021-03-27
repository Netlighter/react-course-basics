import { Component } from "react";

class Timer extends Component {
  state = {
      timeCount: 0,
      isCounting: false,
    };

  componentDidMount() {
    const userCount = localStorage.getItem('timer');
    if (userCount) {
      this.setState({timeCount: +userCount})
    }
  }
  componentDidUpdate() {
    // 'timer' is random name
    localStorage.setItem('timer', this.state.timeCount)
  }

  componentWillUnmount() {
    clearInterval(this.counterId);
  }


  handleStart = () => {
    this.setState({isCounting: true})
    this.counterId = setInterval(() => {
      this.setState({timeCount: this.state.timeCount+1})
    }, 1000)
  }

  handleStop = () => {
    this.setState({isCounting: false});
    clearInterval(this.counterId);
  }

  handleReset = () => {
    this.setState({isCounting: false, timeCount: 0})
    clearInterval(this.counterId)
  }
      
  render () {
      return (
        <div>
          <h1>React Timer!</h1>
          <h3>{this.state.timeCount}</h3>

          {!this.state.isCounting ? (
            <button onClick={this.handleStart}>Start</button>
          ) : (
            <button onClick={this.handleStop}>Stop</button>
          )}
          <button onClick={this.handleReset}>Reset...</button>
          <br/>
          <br/>
        </div>
      )
  }
}

export default Timer