import React from "react";
import { Link } from "react-router-dom";

const Header=({data})=>{
    return(
        <>
        <div 
        style={{
            background:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
            backgroundPosition:`center`,
            backgroundSize:`cover`
        }}
        className="w-full h-[60vh] flex flex-col justify-end items-start p-[5%]">
            <h1 className="w-[70%] mb-3 text-5xl text-white font-black">{data.name || data.title || data.original_name || data.original_title}</h1>
            <p className="w-[70%] text-white">{data.overview.slice(0,200)}...<Link className="text-blue-300 font-semibold">more</Link></p>
            <p className="text-white mt-2">
                <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}{data.release_date || "No Information"}
                <i className="ml-5 text-yellow-500 ri-film-fill"></i>{" "}{data.media_type.toUpperCase()}
            </p>
            <Link className="mt-4 bg-[#6556CD] p-3 rounded text-white">Watch Trailer</Link>
        </div>
        </>
    )
}

export default Header;