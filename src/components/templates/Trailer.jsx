import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Trailer=()=>{
    const navigate=useNavigate();
    const {pathname}=useLocation();
    const category=pathname.includes('movie')?'movie':'tv';
    const ytVideo=useSelector(state=>state[category].info.video)
    
    return(
        <>
        <div className='absolute z-[100] bg-[rgba(0,0,0,0.9)] top-0 left-0 w-screen h-screen flex items-center justify-center'>
            <Link onClick={()=>navigate(-1)} className="absolute hover:text-[#6556CD] ri-close-fill text-3xl text-white top-[5%] right-[5%] "></Link>
            <ReactPlayer height={600} width={1200} url={`https://www.youtube.com/watch?v=${ytVideo.key}`}/>
        </div>
        </>
    )
}
export default Trailer;