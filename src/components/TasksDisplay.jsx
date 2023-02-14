import React from "react"
import TaskComplete from "./TaskComplete"
import TaskRemove from "./TaskRemove"

export default function TasksDisplay() {
    return (
        <div className="pt-3 pb-7">
            <ul id="tasks-list" className="px-3 max-w-[70%] mx-auto flex flex-col gap-y-5 justify-start items-stretch">
                <li className='flex flex-row justify-start items-start gap-x-3'>
                    <span className="task order-1 flex-grow min-h-[40px] flex justify-start items-center font-normal">sample</span>
                    <div className="flex flex-row justify-start items-start gap-x-1">
                        <TaskComplete />
                        <TaskRemove />
                    </div>
                </li>
            </ul>
        </div>
    )
}