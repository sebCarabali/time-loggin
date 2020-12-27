import React, { useState, useEffect } from 'react'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'
import { newTimer } from '../utils/helpers'
import { getTimers, startTimer as st, stop, create, update, remove } from '../client'


const TimersDashboard = () => {
  const [timers, setTimers] = useState([])

  useEffect(() => {
    getTimers((timers) => {
      setTimers(timers)
    })
  }, []);

  const handleCreateFormSubmit = (timer) => {
    createTimer(timer)
  }

  const createTimer = (timer) => {
    const t = newTimer(timer)
    setTimers(timers.concat(t))
    create(t)
  }

  const handleUpdateFormSubmit = (timer) => {
    updateTimer(timer)
  }

  const handleDeleteClick = (id) => {
    deleteTimer(id)
  }

  const deleteTimer = (id) => {
    setTimers(timers.filter(t => t.id !== id))
    remove({ id })
  }

  const updateTimer = (timer) => {
    const newTimers = timers.map(t => {
      if(t.id === timer.id) {
        return Object.assign({}, t, {
          title: timer.title,
          project: timer.project
        })
      } else {
        return t
      }
    })
    setTimers(newTimers)
    update(timer)
  }

  const handleStartClick = (timerId) => {
    startTimer(timerId)
  }

  const handleStopClick = (timerId) => {
    stopTimer(timerId)
  }

  const startTimer = timerId => {
    const now = Date.now()
    setTimers(timers.map(t => {
      if(t.id === timerId) {
        return Object.assign({}, t, { runningSince: now })
      } else {
        return t
      }
    }))

    st({ id: timerId, start: now })
  }

  const stopTimer = timerId => {
    const now = Date.now()
    setTimers(timers.map(t => {
      if(t.id === timerId) {
        const lastElapsed = now - t.runningSince
        return Object.assign({}, t, {
          elapsed: t.elapsed + lastElapsed,
          runningSince: null
        })
      } else {
        return t
      }
    }))

    stop({ id: timerId, stop: now })
  }

  return (
    <div className="ui three column centered grid">
      <div className="column">
        <EditableTimerList onStartClick={handleStartClick} onStopClick={handleStopClick} onDeleteClick={handleDeleteClick} timers={timers} onFormSubmit={handleUpdateFormSubmit} />
        <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
      </div>
    </div>
  )
}

export default TimersDashboard
