import React from "react";
import loader from "/loader.gif"

const Loading =() => {
    return(
        <>
        <div className="w-screen h-full flex justify-center items-center bg-black">
            <img className="w-[60vh] h-[60vh]" src={loader}/>
        </div>
        </>
    )
}

export default Loading;