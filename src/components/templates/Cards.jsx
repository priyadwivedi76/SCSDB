import React from "react";
import { Link } from "react-router-dom";

const Cards=({data,title}) => {
    console.log(data)
    return(
        <div className="flex flex-wrap w-full gap-10 items-center justify-around">
        {data.map((d,index)=>{
            return(
                <Link key={index} className="w-[25vh]">
                    <img className="h-[45vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]" src={`https://image.tmdb.org/t/p/original/${d.poster_path || d.backdrop_path }`} alt="" />
                    <h1 className="font-semibold text-md mt-3 text-zinc-400">{d.name || d.title || d.original_name || d.original_title}</h1>
                </Link>
            )
        })}
        </div>
    )
}

export default Cards;