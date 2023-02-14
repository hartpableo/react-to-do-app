import React from "react"

export default function TaskRemove() {
    return (
        <button type="button" className="min-w-[40px] h-[40px] rounded-full text-white flex justify-center items-center bg-red-300 hover:bg-red-600 transition shadow-md" aria-hidden='true'><i className="bi bi-trash"></i></button>
    )
}