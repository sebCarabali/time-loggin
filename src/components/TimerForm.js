import React, { useState } from 'react'

const TimerForm = ({id, title, project, onFormSubmit, onFormClose}) => {
  const submitText = id ? 'Update' : 'Create'
  const [formState, setFormState] = useState({
    title: title || '',
    project: project || ''
  })

  const handleTitleChange = e => {
    setFormState({ ...formState ,title: e.target.value })
  }

  const handleProjectChange = e => {
    setFormState({ ...formState , project: e.target.value })
  }

  const handleSubmit = () => {
    const timerData = {
      id,
      title: formState.title,
      project: formState.project
    }
    onFormSubmit(timerData)
  }

  return (
    <div className="ui centered card">
      <div className="content">
        <div className="ui form">
          <div className="field">
            <label>Title</label>
            <input type="text" value={formState.title} onChange={handleTitleChange}/>
          </div>
          <div className="field">
            <label>Project</label>
            <input type="text" value={formState.project} onChange={handleProjectChange}/>
          </div>
          <div className="ui two bottom attached buttons">
            <button className="ui basic blue button" onClick={handleSubmit}>
              {submitText}
            </button>
            <button className="ui basic red button" onClick={onFormClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimerForm
