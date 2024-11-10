import React from "react";
import { Link } from "react-router-dom";

const SideNav=()=>{
    return(
        <div className="w-[25%] h-full border-r-2 border-zinc-400 p-10">
            <h1 className="text-2xl text-white font-bold">
                <i class="text-[#6556CD] ri-tv-fill mr-2"></i>
                <span className="">SCSDB</span>
            </h1>
            <nav className="flex flex-col gap-3 text-zinc-400 text-xl">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5">New Feeds</h1>
                <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300">
                    <i class="ri-fire-fill"></i>
                    Trending
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300">Popular</Link>
                <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300">Movies</Link>
                <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300">TV Shows</Link>
                <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300">People</Link>
            </nav>
        </div>
    )
}
export default SideNav;