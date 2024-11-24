import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import Header from "./templates/Header";
import axios from "../utils/axios";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import Loading from "./Loading";

const Home=()=>{
    document.title="SCSDB | Home";
    const [wallpaper,setWallpaper]=useState(null);
    const [trending,setTrending]=useState(null);
    const [category,setCategory]=useState("all")


    const GetHeaderWallpaper=async()=>{
        try {
            const {data}=await axios.get(`/trending/all/day`);
            const randomData=data.results[(Math.random()*data.results.length).toFixed()];
            setWallpaper(randomData);
        } catch (error) {
            console.log("Error: " + error)
        }
    }

    const GetTrending=async()=>{
        try {
            const {data}=await axios.get(`/trending/${category}/day`);
            setTrending(data.results);
        } catch (error) {
            console.log("Error: " + error)
        }
    }

    useEffect(()=>{
        !wallpaper && GetHeaderWallpaper();
        GetTrending();
    },[category])


    return wallpaper && trending ? (
        <>
            <SideNav/>
            <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
                <TopNav/>
                <Header data={wallpaper}/>
                <div className="flex justify-between p-5">
                    <h1 className="text-3xl font-semibold text-zinc-400">
                        Trending
                    </h1>
                    <Dropdown title="Filter" option={["tv","movie","all"]} funct={(e)=>setCategory(e.target.value)} />
                </div>
                <HorizontalCards data={trending}/>
            </div>
        </>
    ):<Loading/>
}

export default Home;