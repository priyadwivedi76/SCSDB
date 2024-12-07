import React from "react";
import { Link } from "react-router-dom";

const Cards=({data,title}) => {
    return(
        <div className="flex px-[3%] flex-wrap w-full h-full gap-10 bg-[#1F1E24] pb-5">
        {data.map((d,index)=>{
            return(
                <Link to={`/${d.media_type || title}/details/:${d.id}`} key={index} className="relative w-[25vh]">
                    <img className="h-[45vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]" src={`https://image.tmdb.org/t/p/original/${d.poster_path || d.backdrop_path || d.profile_path    }`} alt="" />
                    <h1 className="font-semibold text-md mt-3 text-zinc-400">{d.name || d.title || d.original_name || d.original_title}</h1>
                    {d.vote_average && (<div className="absolute right-[-10%] bottom-[8%] h-[7vh] w-[7vh] font-semibold text-xl rounded-full bg-yellow-700 text-white flex items-center justify-center">{(d.vote_average*10).toFixed()} <sup>%</sup></div>)}
                </Link>
            )
        })}
        </div>
    )
}

export default Cards;