import React from "react"

export default function Header(props) {
    const { title } = props
    return (
        <header role='banner'>
            <div className="container text-center">
                <h1 className="title text-[70px] text-gray-500 font-thin mb-3 lowercase">{ title }</h1>
            </div>
        </header>
    )
}