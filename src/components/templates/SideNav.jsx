import axios from "../../utils/axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SideNav=()=>{

    return(
        <div className="w-[25%] h-full border-r-2 border-zinc-400 p-5">
            <h1 className="text-2xl text-white font-bold">
                <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
                <span className="text-2xl">SCSDB</span>
            </h1>
            <nav className="flex flex-col gap-2 text-zinc-400 text-md">
                <h1 className="text-white font-semibold text-xl mt-5 mb-5">New Feeds</h1>
                <Link to='/trending' className="hover:bg-[#6556CD] hover:text-white rounded-lg p-4 duration-300">
                    <i className="mr-2 ri-fire-fill"></i>
                    Trending
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-4 duration-300" to='/popular'>
                    <i className="mr-2 ri-bard-fill"></i>
                    Popular
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-4 duration-300" to='/movie'>
                    <i className="mr-2 ri-clapperboard-fill"></i>
                    Movies
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-4 duration-300" to='/tv'>
                    <i className="mr-2 ri-tv-2-fill"></i>
                    TV Shows
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-4 duration-300" to='/person'>
                    <i className="mr-2 ri-user-3-fill"></i>
                    People
                </Link>
            </nav>
        </div>
    )
}
export default SideNav;