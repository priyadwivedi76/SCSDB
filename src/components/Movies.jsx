import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { useState,useEffect } from "react";
import Loading from "./Loading";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";

const Movies=() => {
    const navigate=useNavigate()
    const [category,setCategory]=useState('now_playing')
    const [movies,setMovies]=useState([])
    const [page,setPage]=useState(1)
    const [hasMore,setHasMore]=useState(true)
    document.title="SCSDB | Movie "

    const GetMovies=async()=>{
        try {
            const {data}=await axios.get(`/movie/${category}?page=${page}`);
            //setTrending(data.results);

            if(data.results.length > 0){
                setPage(page+1)
                setMovies((prevResult)=>[...prevResult,...data.results])
            }else{
                setHasMore(false);
            }
        } catch (error) {
            console.log("Error: " + error)
        }
    }

    useEffect(()=>{
       refresherhandler();
    },[category])


    const refresherhandler=async() => {
        if(movies.length === 0){
            GetMovies();
        }else{
            setPage(1);
            setMovies([]);
            GetMovies();
        }
    }

    return movies.length > 0 ? (
        <>
        <div className="w-screen h-screen mb-5">
            <div className="px-[3%] w-full h-[10vh] flex items-center justify-between">
                <h1 className="text-zinc-400 font-semibold text-2xl">
                    <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>
                    Movies<small className="text-md text-zinc-600 m-2">({category})</small>
                </h1>
                <div className="flex items-center w-[80%]">
                    <TopNav/>
                    <Dropdown title="Category" option={["popular","top_rated","upcoming","now_playing"]} funct={(e)=>setCategory(e.target.value)}/>
                </div>
            </div>

            <InfiniteScroll
                dataLength={movies.length}
                next={GetMovies}
                hasMore={true}
                loader={<h1 className="text-white text-xl font-semibold bg-black h-[10vh] text-center pt-5">Loading</h1>}
            >
                <Cards data={movies} title="movie"/>
            </InfiniteScroll>
        </div>
        </>
    ):<Loading/>
}

export default Movies;