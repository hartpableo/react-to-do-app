import React, { useState } from "react"
import TaskInput from "./TaskInput"
import TasksDisplay from "./TasksDisplay"
import { nanoid } from "nanoid"

export default function TasksWrapper() {
    const [ myTasks, setmyTasks ] = useState([])

    function addTask(taskName) {
        const newTask = { id: `todo-${ nanoid() }`, taskName, taskCompleted: false };
        setmyTasks( [ ...myTasks, newTask ] );
    }

    // function removeTask(id) {
    //     const remainingTasks = myTasks.filter(task => id !== task.id)
    //     setmyTasks(remainingTasks)
    // }

    return (
        <main className="container">
            <div className="relative bg-yellow-100 shadow-xl rounded-xl border border-solid border-gray-800">
                <TaskInput
                    addTask={ addTask }
                />
                <TasksDisplay
                    tasks={ myTasks }
                    isEmpty={ ( myTasks.length == 0 ) ? true : false }
                />
            </div>
        </main>
    )
}