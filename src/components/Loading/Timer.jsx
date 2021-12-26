import React, { Component } from 'react'
import {ContainerMainTimer} from './TimerStyles'
//https://codesandbox.io/s/react-timer-8kgmk?file=/src/App.js:204-258
export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 4,
      visible: true,
    }
  }

  timer() {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
      this.setState({
        visible: false,
        
      })
    }

  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const { visible} = this.state;
    const {mensagem} = this.props;
    if (visible) {
      return (
        <ContainerMainTimer>{this.state.currentCount} segundos</ContainerMainTimer>
      );
    } else {
      return (
        <ContainerMainTimer>{mensagem}</ContainerMainTimer>
      )
    }

  }
}

