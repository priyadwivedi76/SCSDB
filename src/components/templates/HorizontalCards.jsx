import React from "react";
import Dropdown from "./Dropdown";


const HorizontalCards=({data})=>{
    return(
            <div className="w-[100%] flex overflow-y-hidden px-5">
                {data.map((data,index)=>(
                    <div key={index} className="min-w-[15%] bg-zinc-900 my-5 mr-5 mb-3">
                        <img className="w-full h-[45%] object-cover" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}`} alt="" />
                        <div className="text-white p-2 h-[55%]">
                            <h1 className="text-xl font-semibold">{data.name || data.title || data.original_name || data.original_title}</h1>
                            <p className="text-xs">{data.overview.slice(0,50)}...<span className="text-zinc-500 font-semibold">more</span></p>
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default HorizontalCards;