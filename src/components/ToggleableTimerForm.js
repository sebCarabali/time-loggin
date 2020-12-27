import React, { useState } from 'react'
import TimerForm from './TimerForm'

const ToggleableTimerForm = ({onFormSubmit}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleFormOpen = () => {
    setIsOpen(true)
  }

  const handleFormClose = () => {
    setIsOpen(false)
  }

  const handleFormSubmit = (timer) => {
    onFormSubmit(timer)
    setIsOpen(false)
  }

  return (
      <>
      {isOpen
        ? <TimerForm onFormClose={handleFormClose} onFormSubmit={handleFormSubmit}/>
        : <div className="ui basic content center aligned segment">
            <button className="ui basic button icon" onClick={handleFormOpen}>
              <i className="plus icon"></i>
            </button>
          </div>
      }
      </>
  )
}

export default ToggleableTimerForm
