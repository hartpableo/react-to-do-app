import React, { useState } from "react"
import TaskInput from "./TaskInput"
import TasksDisplay from "./TasksDisplay"

export default function TasksList() {
    return (
        <main className="container">
            <div className="relative bg-yellow-100 shadow-xl rounded-xl border border-solid border-gray-800">
                <TaskInput />
                <TasksDisplay />
            </div>
        </main>
    )
}