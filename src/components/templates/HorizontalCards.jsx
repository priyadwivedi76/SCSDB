import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import noImage from '/noImage.jpg'


const HorizontalCards=({data})=>{
    return(
            <div className="w-[100%] flex overflow-y-hidden px-5">
                {data.length>0 ? data.map((data,index)=>(
                    <Link to={`/${data.media_type}/details/${data.id}`} key={index} className="min-w-[20%] h-[30vh] overflow-y-auto bg-zinc-900 my-5 mr-5 mb-3">
                        <img className="w-full h-[45%] object-cover" src={data.backdrop_path || data.poster_path ? `https://image.tmdb.org/t/p/original/${data.poster_path}`:noImage} alt="" />
                        <div className="text-white p-2 h-[55%]">
                            <h1 className="text-xl pb-2 font-semibold">{data.name || data.title || data.original_name || data.original_title}</h1>
                            <p className="text-md">{data.overview.slice(0,50)}...<span className="text-zinc-500 font-semibold">more</span></p>
                        </div>
                    </Link>
                )):<h1 className="text-3xl font-black text-white mt-5">Nothing to Show</h1>}
            </div>
    )
}

export default HorizontalCards;