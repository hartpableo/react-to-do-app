import React, { useState } from "react"

export default function List() {
    const [ task, setTask ] = useState([ 'take bath', 'eat breakfast' ])

    function handleInput(el) {
        let taskValue = el.value
        console.log(taskValue)
    }

    function handleTask(event) {
        const newTask = event.target.value
        setTask(prevTasksArray => [ ...prevTasksArray, newTask ])
        console.log(task)
    }

    // function addTask() {
    //     const value = addTaskField.value
    //     setTask(prevTasksArray => [ ...prevTasksArray, value ])
    //     // value = ''
    // }

    const myTasks = task.map(( task, key ) => {
        return (
            <li key={key} className='flex flex-row justify-start items-start gap-x-3'>
                <span className="task order-1 flex-grow min-h-[40px] flex justify-start items-center font-normal">{ task }</span>
                <div className="flex flex-row justify-start items-start gap-x-1">
                    <button type="button" className="min-w-[40px] h-[40px] rounded-full text-white flex justify-center items-center bg-green-300 hover:bg-green-600 transition shadow-md" aria-hidden='true'><i className="bi bi-check-lg"></i></button>
                    <button type="button" className="min-w-[40px] h-[40px] rounded-full text-white flex justify-center items-center bg-red-300 hover:bg-red-600 transition shadow-md" aria-hidden='true'><i className="bi bi-trash"></i></button>
                </div>
            </li>
        )
    })

    return (
        <div className="container">
            <div className="relative bg-yellow-100 shadow-xl rounded-xl border border-solid border-gray-800">
                <div className="p-5 border-b border-solid border-gray-800 flex flex-row justify-start items-stretch flex-nowrap border-b border-solid border-gray-800 mb-4">
                    <input onChange={ handleInput } type="text" name="Add a task" id="add-task" placeholder="Add task.." className="order-1 bg-transparent w-full text-slate-900 placeholder:text-slate-600 min-h-[50px] rounded-tr-md rounded-br-md pl-2 flex-grow border-b border-solid border-white"/>
                    <button onClick={ handleTask } type="button" className="min-w-[50px] h-[50px] rounded-full text-white flex justify-center items-center bg-yellow-300 hover:bg-yellow-600 transition shadow-md" aria-hidden='true'><i className="bi bi-pencil-fill"></i></button>
                </div>
                <div className="pt-3 pb-7">
                    <ul id="tasks-list" className="px-3 max-w-[70%] mx-auto flex flex-col gap-y-5 justify-start items-stretch">
                        {myTasks}
                    </ul>
                </div>
            </div>
        </div>
    )
}