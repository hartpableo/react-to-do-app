import React, { useState } from "react"
import Todo from "./Todo"

export default function TasksDisplay(props) {
    const { tasks, isEmpty } = props

    const tasksList = tasks.map(taskItem => {
        return (
            <Todo
                key={ taskItem.id }
                id={ taskItem.id }
                taskName={ taskItem.taskName }
                taskCompleted={ taskItem.taskCompleted }
            />
        )
    })
    return (
        <div className="pt-3 pb-7">
            {isEmpty
                ? <p className="font-bold text-slate-700 text-center m-0 w-100">You currently have no tasks!</p>
                : <ul id="tasks-list" className="px-3 max-w-[70%] mx-auto flex flex-col gap-y-5 justify-start items-stretch">
                    { tasksList }
                  </ul>
            }
        </div>
    )
}