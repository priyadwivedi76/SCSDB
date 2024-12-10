import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncloadPerson } from "../../store/actions/personAction";
import {removePerson} from "../../store/actions/personAction";
import { Link,Outlet } from "react-router-dom";
import Loading from "../../components/Loading"
import { useLocation } from "react-router-dom";
import HorizontalCards from '../../components/templates/HorizontalCards'
import { useState } from "react";
import Dropdown from "./Dropdown";

const PersonDetails=() =>{
    const [category,setCategory]=useState("movie")
    const {pathname}=useLocation();
    const navigate=useNavigate()
    const {id}=useParams();
    const {info}=useSelector(state=>state.person)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(asyncloadPerson(id))
        return ()=>{
            dispatch(removePerson())
        }
    },[id])
    return info ? (
        <>
        <div className="px-[10%] w-screen flex flex-col bg-[#1f1e24] pb-[5%] h-[180vh]">
            <nav className="h-[10vh] w-full text-zinc-200 flex gap-10 items-center text-2xl">
                <Link onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></Link>
            </nav>
            <div className="w-full flex">
                <div className="w-[30%]">
                    <img className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]" src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path||info.detail.backdrop_path||info.detail.profile_path}`} alt="" />
                    <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500'/>
                    <div className="text-xl text-white flex gap-x-10">
                    <a target="_blank" href={`https://www.facebook.com/${info.externalId.facebook_id}`}>
                        <i className="ri-facebook-circle-fill"></i>
                    </a>
                    <a target="_blank" href={`https://x.com/${info.externalId.twitter_id}`}>
                    <i className="ri-twitter-x-line"></i>
                    </a>
                    <a target="_blank" href={`https://www.instagram.com/${info.externalId.instagram_id}`}>
                        <i className="ri-instagram-fill"></i>
                    </a>
                </div>
                <h1 className="text-zinc-400 text-xl my-2 font-semibold">Personal Information</h1>
                <h1 className="text-zinc-400 text-md font-semibold">Known for:</h1>
                <h1 className="text-zinc-400">{info.detail.known_for_department}</h1>

                <h1 className="text-zinc-400 text-md font-semibold mt-2">Gender:</h1>
                <h1 className="text-zinc-400">{info.detail.gender===2 ? 'Male':'Female'}</h1>

                <h1 className="text-zinc-400 text-md font-semibold mt-2">Birthday:</h1>
                <h1 className="text-zinc-400">{info.detail.birthday}</h1>

                <h1 className="text-zinc-400 text-md font-semibold mt-2">Death Day:</h1>
                <h1 className="text-zinc-400">{info.detail.deathday ? info.detail.deathday :"Still Alive"}</h1>

                <h1 className="text-zinc-400 text-md font-semibold mt-2">Also known As:</h1>
                <h1 className="text-zinc-400">{info.detail.also_known_as.join(", ")}</h1>

                <h1 className="text-zinc-400 text-md font-semibold mt-2">Place of Birth:</h1>
                <h1 className="text-zinc-400">{info.detail.place_of_birth}</h1>
                </div>
                <div className="w-[70%] ml-[5%]">
                    <h1 className="text-zinc-400 text-6xl my-2 font-black">{info.detail.name}</h1>
                    <h1 className="text-zinc-400 text-2xl font-semibold my-2">Biography</h1>
                    <p className="text-zinc-400">{info.detail.biography}</p>

                    <h1 className="text-zinc-400 text-lg mt-3 font-semibold my-2">Summary:</h1>
                    <HorizontalCards data={info.combinedCredits.cast}/>
                    <div className="w-full flex justify-between">
                        <h1 className="text-zinc-400 text-xl mt-3 font-semibold my-2">Acting</h1>
                        <Dropdown title='Category' option={['movie','tv']} funct={(e)=>setCategory(e.target.value)}/>
                    </div>
                    <div className="list-disc text-zinc-400 w-full h-[50vh] border-2 border-zinc-700 mt-5 overflow-x-hidden overflow-y-auto p-5 shadow-xl shadow-[rgba(255,255,255,0.3)]">
                        {info[category+"Credits"].cast.map((c,i)=>{
                            return(
                                <li key={i} className="hover:text-white duration-300 hover:cursor-pointer mb-5">
                                    <Link to={`/${category}/details/${c.id}`} className="">
                                        <span className="">{c.name || c.title || c.original_name || c.original_title}</span>
                                        <span className="block ml-5">{c.character && `Character name:${c.character}`}</span>
                                    </Link>
                                </li>
                            )})}
                    </div>
                </div>
            </div>
        </div>
        </>
    ):<Loading/>
}

export default PersonDetails;