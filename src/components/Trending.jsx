import React from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/templates/TopNav.jsx";
import Dropdown from "../components/templates/Dropdown.jsx";
const Trending=() =>{
    const navigate=useNavigate()
    return(
        <>
        <div className="p-[3%] w-screen h-screen">
            <div className="w-full h-[10vh] flex items-center justify-between">
                <h1 className="text-zinc-400 font-semibold text-2xl">
                    <i onClick={()=>navigate(-1)} class="hover:text-[#6556CD] ri-arrow-left-line"></i>
                    Trending
                </h1>
                <div className="flex items-center w-[80%]">
                    <TopNav/>
                    <Dropdown title="Category" option={["movie","tv","all"]}/>
                    <div className="w-[2%]"></div>
                    <Dropdown title="Duration" option={["week","day"]}/>
                </div>
            </div>
        </div>

        
        </>
    )
}

export default Trending;