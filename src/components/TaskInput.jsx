import React from "react"

export default function TaskInput(props) {
    return (
        <div className="p-5 border-b border-solid border-gray-800 flex flex-row justify-start items-stretch flex-nowrap border-b border-solid border-gray-800 mb-4">
            <input 
                type="text" 
                name="Add a task" 
                id="add-task" 
                placeholder="Add task.." 
                className="order-1 bg-transparent w-full text-slate-900 placeholder:text-slate-600 min-h-[50px] rounded-tr-md rounded-br-md pl-2 flex-grow border-b border-solid border-white"
            />
            <button 
                type="button" 
                className="min-w-[50px] h-[50px] rounded-full text-white flex justify-center items-center bg-yellow-300 hover:bg-yellow-600 transition shadow-md" 
                aria-hidden='true'
                >
                    <i className="bi bi-pencil-fill"></i>
            </button>
        </div>
    )
}