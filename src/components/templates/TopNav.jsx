import React, { useState,useEffect } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
import noImage from "/noImage.jpg";

const TopNav=() => {
    const [query,setquery]=useState("");
    const [searches,setSearches]=useState([]);

    const getSearches=async()=>{
        try {
            const {data}=await axios.get(`/search/multi?query=${query}`);
            setSearches(data.results);
        } catch (error) {
            console.log("Error: " + error)
        }
    }

    useEffect(()=>{
        getSearches();
    },[query])

    return(
        <>
        <div className="w-[80%] h-[10vh] relative flex items-center mx-auto">
            <i className="text-3xl text-zinc-400 ri-search-line"></i>
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
                className="text-3xl text-zinc-400 ri-close-large-line"></i>
            )}
            <div className="z-[100] absolute max-h-[50vh] w-[50%] bg-zinc-200 top-[100%] left-[5%] overflow-auto rounded">
                {searches.map((search,index)=>(
                    <Link key={index} className="hover:text-black duration-300 hover:bg-zinc-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">

                    <img src={search.backdrop_path || search.profile_path ? `https://image.tmdb.org/t/p/original/${search.backdrop_path || search.profile_path}` : noImage} className="h-[10vh] w-[10vh] object-cover rounded mr-5" alt="" />
                    <span>{search.name || search.title || search.original_name || search.original_title}</span> 
                    </Link>
                ))}
            </div>
        </div>
        </>
    )
}

export default TopNav;