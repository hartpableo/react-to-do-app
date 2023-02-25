import React from "react"
import Header from './components/Header'
import TasksWrapper from './components/TasksWrapper'

export default function App() {
  return (
    <>
      <Header
        title='my Todos'
      />
      <TasksWrapper />
    </>
  )
}