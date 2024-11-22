import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import Header from "./templates/Header";
import axios from "../utils/axios";

const Home=()=>{
    document.title="SCSDB | Home";
    const [wallpaper,setWallpaper]=useState(null)


    const GetHeaderWallpaper=async()=>{
        try {
            const {data}=await axios.get(`/trending/all/day`);
            const randomData=data.results[(Math.random()*data.results.length).toFixed()];
            setWallpaper(randomData);
        } catch (error) {
            console.log("Error: " + error)
        }
    }

    useEffect(()=>{
        !wallpaper && GetHeaderWallpaper();
    },[])


    return wallpaper ? (
        <>
            <SideNav/>
            <div className="w-[80%] h-full">
                <TopNav/>
                <Header data={wallpaper}/>
            </div>
        </>
    ):<h1>Loading</h1>
}

export default Home;