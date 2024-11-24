import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import Header from "./templates/Header";
import axios from "../utils/axios";
import HorizontalCards from "./templates/HorizontalCards";

const Home=()=>{
    document.title="SCSDB | Home";
    const [wallpaper,setWallpaper]=useState(null);
    const [trending,setTrending]=useState(null);


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
            const {data}=await axios.get(`/trending/all/day`);
            setTrending(data.results);
        } catch (error) {
            console.log("Error: " + error)
        }
    }

    useEffect(()=>{
        !wallpaper && GetHeaderWallpaper();
        !trending && GetTrending();
    },[])
    console.log(trending);

    return wallpaper && trending ? (
        <>
            <SideNav/>
            <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
                <TopNav/>
                <Header data={wallpaper}/>
                <HorizontalCards data={trending}/>
            </div>
        </>
    ):<h1 className="text-5xl text-white font-semibold p-10">Loading....</h1>
}

export default Home;