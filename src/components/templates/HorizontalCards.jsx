import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";


const HorizontalCards=({data})=>{
    return(
            <div className="w-[100%] flex overflow-y-hidden px-5">
                {data.map((data,index)=>(
                    <Link to={`/${data.media_type}/details/:${data.id}`} key={index} className="min-w-[18%] h-[40vh] bg-zinc-900 my-5 mr-5 mb-3">
                        <img className="w-full h-[45%] object-cover" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path||data.poster_path}`} alt="" />
                        <div className="text-white p-2 h-[55%]">
                            <h1 className="text-xl pb-2 font-semibold">{data.name || data.title || data.original_name || data.original_title}</h1>
                            <p className="text-md">{data.overview.slice(0,50)}...<span className="text-zinc-500 font-semibold">more</span></p>
                        </div>
                    </Link>
                ))}
            </div>
    )
}

export default HorizontalCards;