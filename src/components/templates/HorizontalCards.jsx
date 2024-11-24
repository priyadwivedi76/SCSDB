import React from "react";


const HorizontalCards=({data})=>{
    return(
        <div className="w-full p-4">
            <div className="mb-5">
                <h1 className="font-semibold text-3xl text-zinc-300">Trending</h1>
            </div>
            <div className="w-[100%] flex overflow-y-hidden">
                {data.map((data,index)=>(
                    <div key={index} className="min-w-[15%] bg-zinc-900 mr-5">
                        <img className="w-full object-cover" src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}`} alt="" />
                        <div className="text-white p-3">
                            <h1 className="text-xl font-semibold">{data.name || data.title || data.original_name || data.original_title}</h1>
                            <p className="text-xs">{data.overview.slice(0,50)}...<span className="text-blue-300 font-semibold">more</span></p>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}

export default HorizontalCards;