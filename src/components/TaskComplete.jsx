import React from "react"

export default function TaskComplete(props) {
    const { isComplete, onClick } = props

    return (
        <button 
            type="button" 
            className={ `min-w-[40px] h-[40px] rounded-full text-white flex justify-center items-center bg-green-300 hover:bg-green-600 transition shadow-md${ ( isComplete == true ) && ` bg-green-600` }` } 
            aria-hidden='true'
            onClick={ onClick }
        >
            <i className="bi bi-check-lg"></i>
        </button>
    )
}