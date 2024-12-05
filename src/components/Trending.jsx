import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/templates/TopNav.jsx";
import Dropdown from "../components/templates/Dropdown.jsx";
import axios from "../utils/axios.jsx";
import Cards from "./templates/Cards.jsx";
import Loading from "./Loading.jsx";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending=() =>{
    const navigate=useNavigate()
    const [category,setCategory]=useState('all')
    const [duration,setDuration]=useState('day')
    const [trending,setTrending]=useState([])
    const [page,setPage]=useState(1)

    const GetTrending=async()=>{
        try {
            const {data}=await axios.get(`/trending/${category}/${duration}`);
            //setTrending(data.results);
            setTrending((prevResult)=>[...prevResult,...data.results])
            setPage(page+1)
            console.log(data)
        } catch (error) {
            console.log("Error: " + error)
        }
    }

    useEffect(()=>{
        GetTrending();
    },[category,duration])


    const refresherhandler=() => {

    }

    return trending.length > 0 ? (
        <>
        <div className="w-screen h-screen mb-5">
            <div className="px-[3%] w-full h-[10vh] flex items-center justify-between">
                <h1 className="text-zinc-400 font-semibold text-2xl">
                    <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>
                    Trending
                </h1>
                <div className="flex items-center w-[80%]">
                    <TopNav/>
                    <Dropdown title="Category" option={["movie","tv","all"]} funct={(e)=>setCategory(e.target.value)}/>
                    <div className="w-[2%]"></div>
                    <Dropdown title="Duration" option={["week","day"]} funct={(e)=>setDuration(e.target.value)}/>
                </div>
            </div>

            <InfiniteScroll
                dataLength={trending.length}
                next={GetTrending}
                hasMore={true}
                loader={<h1 className="text-white text-xl font-semibold bg-black h-[10vh] text-center pt-5">Loading</h1>}
            >
                <Cards data={trending} title={category}/>
            </InfiniteScroll>
        </div>
        </>
    ):<Loading/>
}

export default Trending;