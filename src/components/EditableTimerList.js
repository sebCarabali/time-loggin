import React from 'react'
import EditableTimer from './EditableTimer'

const EditableTimerList = ({timers, onFormSubmit, onDeleteClick, onStartClick, onStopClick}) => {

  return (
    <div id="timers">
    {timers.map(timer => {
      return <EditableTimer onStartClick={onStartClick} onStopClick={onStopClick} onDeleteClick={onDeleteClick} onFormSubmit={onFormSubmit} key={timer.id} {...timer} />
    })}
    </div>
  )
}

export default EditableTimerList;
