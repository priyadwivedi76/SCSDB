import React from "react";

const TopNav=() => {
    return(
        <>
        <div className="w-full h-[10vh] relative flex justify-center items-center">
            <i class="text-3xl text-zinc-400 ri-search-line"></i>
            <input type="text" placeholder="Search anything" className="text-zinc-400 w-[50%] p-5 mx-10 bg-transparent outline-none border-none"/>
            <i class="text-3xl text-zinc-400 ri-close-large-line"></i>
        </div>
        </>
    )
}

export default TopNav;