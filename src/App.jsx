import React from "react"
import Header from './components/Header'
import TasksList from './components/TasksList'

export default function App() {
  return (
    <>
      <Header
        title='my Todos'
      />
      <TasksList />
    </>
  )
}