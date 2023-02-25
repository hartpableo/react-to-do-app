import React, { useState } from "react"
import TaskComplete from "./TaskComplete"
import TaskRemove from "./TaskRemove"

export default function Todo(props) {
    const { id, taskName } = props

    const [ taskCompleted, setTaskCompleted ] = useState(false)

    function isCompleteHandler() {
        setTaskCompleted(true)
    }

    return (
        <li id={ id } className={ `flex flex-row justify-start items-start gap-x-3` }>
            <span
                className={ `task order-1 flex-grow min-h-[40px] flex justify-start items-center${ ( taskCompleted == true ) ? ` font-bold text-green-500 line-through` : ` font-normal` }` }
            >
                { taskName }
            </span>
            <div className="flex flex-row justify-start items-start gap-x-1">
                <TaskComplete
                    isComplete={ taskCompleted }
                    onClick={ isCompleteHandler }
                />
                <TaskRemove />
            </div>
        </li>
    )
}