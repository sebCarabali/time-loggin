import React, { useState } from 'react'
import TimerForm from './TimerForm'
import Timer from './Timer'

const EditableTimer = ({
  id,
  title,
  project,
  elapsed,
  runningSince,
  onFormSubmit,
  onDeleteClick,
  onStartClick,
  onStopClick
}) => {

  const [editFormOpen, setEditFormOpen] = useState(false)

  const handleEditClick = () => {
    openForm()
  }

  const handleDeleteClick = () => {
    onDeleteClick(id)
  }

  const handleFormClose = () => {
    closeForm()
  }

  const handleSubmit = (timer) => {
    onFormSubmit(timer)
    closeForm()
  }

  const openForm = () => {
    setEditFormOpen(true)
  }

  const closeForm = () => {
    setEditFormOpen(false)
  }

  return (
    <>
    {editFormOpen
      ? <TimerForm onFormSubmit={handleSubmit} onFormClose={handleFormClose} id={id} title={title} project={project}/>
      : <Timer onStartClick={onStartClick} onStopClick={onStopClick} onDeleteClick={handleDeleteClick} onEditClick={handleEditClick} id={id} title={title} project={project} elapsed={elapsed} runningSince={runningSince}/>
    }
    </>
  )
}

export default EditableTimer;
