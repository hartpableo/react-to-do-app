import React from "react"
import TaskComplete from "./TaskComplete"
import TaskRemove from "./TaskRemove"

export default function Todo(props) {
    const { id, taskName, taskCompleted } = props
    return (
        <li id={ id } className='flex flex-row justify-start items-start gap-x-3'>
            <span className="task order-1 flex-grow min-h-[40px] flex justify-start items-center font-normal">{ taskName }</span>
            <div className="flex flex-row justify-start items-start gap-x-1">
                <TaskComplete />
                <TaskRemove />
            </div>
        </li>
    )
}