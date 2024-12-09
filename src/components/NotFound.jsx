import React from "react";
import notFound from '/404.gif';

const NotFound =() => {
    return(
        <>
        <div className="w-screen h-full flex justify-center items-center bg-black">
            <img className="w-[60vh] h-[60vh]" src={notFound}/>
        </div>
        </>
    )
}

export default NotFound;