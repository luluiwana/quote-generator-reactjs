'use client'
import axios from "axios";
import React, { useEffect, useState } from "react";

const URL = "https://type.fit/api/quotes";

export default function App() {
    const [quotes, setQuotes] = React.useState()
    let [idx, setIdx] = React.useState(0)
    const handleClick = () => {
        setIdx(idx + 1)
    }
    React.useEffect(() => {
        axios.get(URL).then((response) => {
            setQuotes(response.data)
        })
    }, [])
    if (!quotes) return "No post!"

    return (
        <div className=" bg-slate-300 h-screen text-black p-10 flex justify-center items-center ">
            <div className=" bg-white w-screen md:w-1/2 md:mx-32 p-5 hover:shadow-lg hover:border-violet-300 hover:border-2 ">
                <p className=" text-xl">{quotes[idx].text}</p>
                <p className=" text-right text-sm mt-2">-{quotes[idx].author}</p>
                <div className="text-center mt-5">
                    <a className=" rounded-md text-sm p-2 bg-violet-700 text-white hover:bg-fuchsia-800 cursor-pointer" onClick={handleClick}>Change</a>
                </div>
            </div>

        </div>
    );
}