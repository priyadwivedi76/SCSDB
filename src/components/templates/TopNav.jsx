import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNav=() => {
    const [query,setquery]=useState("");
    console.log(query)
    return(
        <>
        <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
            <i class="text-3xl text-zinc-400 ri-search-line"></i>
            {/* Target input and print them as query */}
            <input 
            type="text" 
            placeholder="Search anything" 
            className="text-zinc-400 w-[50%] p-5 mx-10 bg-transparent outline-none border-none" 
            onChange={(e)=>setquery(e.target.value)} 
            value={query}/>

            {query.length > 0 && (
                <i 
                onClick={()=>setquery("")}
                class="text-3xl text-zinc-400 ri-close-large-line"></i>
            )}
            <div className="absolute max-h-[50vh] w-[50%] bg-zinc-200 top-[90%] overflow-auto rounded">
                {/* <Link className="hover:text-black duration-300 hover:bg-zinc-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
                    <img src="" alt="" />
                    <span>Hello</span> 
                </Link> */}
            </div>
        </div>
        </>
    )
}

export default TopNav;