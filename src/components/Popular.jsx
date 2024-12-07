import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import { useState,useEffect } from "react";
import Loading from "./Loading";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";
const Popular=()=>{
    const navigate=useNavigate()
    const [category,setCategory]=useState('movie')
    const [popular,setPopular]=useState([])
    const [page,setPage]=useState(1)
    const [hasMore,setHasMore]=useState(true)
    document.title="SCSDB | Popular "+category.toLocaleUpperCase()

    const GetPopular=async()=>{
        try {
            const {data}=await axios.get(`${category}/popular?page=${page}`);
            //setTrending(data.results);

            if(data.results.length > 0){
                setPage(page+1)
                setPopular((prevResult)=>[...prevResult,...data.results])
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
        if(popular.length === 0){
            GetPopular();
        }else{
            setPage(1);
            setPopular([]);
            GetPopular();
        }
    }

    return popular.length > 0 ? (
        <>
        <div className="w-screen h-screen mb-5">
            <div className="px-[3%] w-full h-[10vh] flex items-center justify-between">
                <h1 className="text-zinc-400 font-semibold text-2xl">
                    <i onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i>
                    Popular
                </h1>
                <div className="flex items-center w-[80%]">
                    <TopNav/>
                    <Dropdown title="Category" option={["movie","tv"]} funct={(e)=>setCategory(e.target.value)}/>
                </div>
            </div>

            <InfiniteScroll
                dataLength={popular.length}
                next={GetPopular}
                hasMore={true}
                loader={<h1 className="text-white text-xl font-semibold bg-black h-[10vh] text-center pt-5">Loading</h1>}
            >
                <Cards data={popular} title={category}/>
            </InfiniteScroll>
        </div>
        </>
    ):<Loading/>
}


export default Popular;