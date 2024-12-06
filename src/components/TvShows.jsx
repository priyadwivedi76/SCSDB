import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { useState,useEffect } from "react";
import Loading from "./Loading";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";

const TVShows=() => {
    const navigate=useNavigate()
    const [category,setCategory]=useState('airing_today')
    const [shows,setShows]=useState([])
    const [page,setPage]=useState(1)
    const [hasMore,setHasMore]=useState(true)
    document.title="SCSDB | TV Shows "

    const GetShows=async()=>{
        try {
            const {data}=await axios.get(`/tv/${category}?page=${page}`);
            //setTrending(data.results);

            if(data.results.length > 0){
                setPage(page+1)
                setShows((prevResult)=>[...prevResult,...data.results])
            }else{
                setHasMore(false);
            }
            console.log(data)
        } catch (error) {
            console.log("Error: " + error)
        }
    }

    useEffect(()=>{
       refresherhandler();
    },[category])


    const refresherhandler=async() => {
        if(shows.length === 0){
            GetShows();
        }else{
            setPage(1);
            setShows([]);
            GetShows();
        }
    }

    return shows.length > 0 ? (
        <>
        <div className="w-screen h-screen mb-5">
            <div className="px-[3%] w-full h-[10vh] flex items-center justify-between">
                <h1 className="text-zinc-400 font-semibold text-2xl">
                    <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>
                    TV Shows<small className="text-md text-zinc-600 m-2">({category})</small>
                </h1>
                <div className="flex items-center w-[80%]">
                    <TopNav/>
                    <Dropdown title="Category" option={["on_the_air","top_rated","popular","airing_now"]} funct={(e)=>setCategory(e.target.value)}/>
                </div>
            </div>

            <InfiniteScroll
                dataLength={shows.length}
                next={GetShows}
                hasMore={true}
                loader={<h1 className="text-white text-xl font-semibold bg-black h-[10vh] text-center pt-5">Loading</h1>}
            >
                <Cards data={shows} title={category}/>
            </InfiniteScroll>
        </div>
        </>
    ):<Loading/>
}

export default TVShows;