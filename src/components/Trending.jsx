import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/templates/TopNav.jsx";
import Dropdown from "../components/templates/Dropdown.jsx";
import axios from "../utils/axios.jsx";
import Cards from "./templates/Cards.jsx";
import Loading from "./Loading.jsx";
const Trending=() =>{
    const navigate=useNavigate()
    const [category,setCategory]=useState('all')
    const [duration,setDuration]=useState('day')
    const [trending,setTrending]=useState(null)


    const GetTrending=async()=>{
        try {
            const {data}=await axios.get(`/trending/${category}/${duration}`);
            setTrending(data.results);
        } catch (error) {
            console.log("Error: " + error)
        }
    }


    console.log(trending)

    useEffect(()=>{
        GetTrending();
    },[category,duration])

    return trending ? (
        <>
        <div className="px-[3%] w-screen h-screen overflow-hidden overflow-y-auto">
            <div className="w-full h-[10vh] flex items-center justify-between">
                <h1 className="text-zinc-400 font-semibold text-2xl">
                    <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>
                    Trending
                </h1>
                <div className="flex items-center w-[80%]">
                    <TopNav/>
                    <Dropdown title="Category" option={["movie","tv","all"]} funct={(e)=>setCategory(e.value.target)}/>
                    <div className="w-[2%]"></div>
                    <Dropdown title="Duration" option={["week","day"]} funct={(e)=>setDuration(e.value.target)}/>
                </div>
            </div>
            
            <Cards data={trending} title={category}/>
        </div>
        </>
    ):<Loading/>
}

export default Trending;