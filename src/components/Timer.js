import React from 'react'
import { renderElapsedString } from '../utils/helpers'
import TimerActionButton from './TimerActionButton'

export class Timer extends React.Component {

  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => {this.forceUpdate()}, 50)
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval)
  }

  handleStartClick = () => {
    this.props.onStartClick(this.props.id)
  }

  handleStopClick = () => {
    this.props.onStopClick(this.props.id)
  }

  render(){
    const elapsedString = renderElapsedString(this.props.elapsed, this.props.runningSince)
    return (
      <div className="ui centered card">
        <div className="content">
          <div className="header">
            {this.props.title}
          </div>
          <div className="meta">
            {this.props.project}
          </div>
          <div className="center aligned description">
            <h2>{elapsedString}</h2>
          </div>
          <div className="extra content">
            <span className="right floated edit icon" onClick={this.props.onEditClick}>
              <i className="edit icon"></i>
            </span>
            <span className="right floated trash icon" onClick={this.props.onDeleteClick}>
              <i className="trash icon"></i>
            </span>
          </div>
        </div>
        <TimerActionButton timerIsRunning={!!this.props.runningSince}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}/>
      </div>
  )
}
}

export default Timer
