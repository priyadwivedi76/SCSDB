import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncloadMovie } from "../../store/actions/movieAction";
import {removemovie} from "../../store/actions/movieAction";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading"
const MovieDetails=() =>{
    const navigate=useNavigate()
    const {id}=useParams();
    const {info}=useSelector(state=>state.movie)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(asyncloadMovie(id))
        return ()=>{
            dispatch(removemovie())
        }
    },[])

    return info ? (
        <>
        <div style={{
            background:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
            backgroundPosition:`center`,
            backgroundSize:`cover`
        }} className="w-screen h-screen px-[10%]">
            <nav className="h-[10vh] w-full text-zinc-200 flex gap-10 items-center text-2xl">
                <Link onClick={()=>navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></Link>
                <a target="_blank" href={`https://en.wikipedia.org/wiki/${info.externalId.wikidata_id}`}>
                    <i className="ri-earth-fill"></i>
                </a>
                <a target="_blank" href={info.detail.homepage}>
                    <i className="ri-home-4-line"></i>
                </a>
                <a target="_blank" href={`https://www.imdb.com/title/${info.externalId.imdb_id}`}>
                    imdb
                </a>
            </nav>
        </div>
        </>
    ):<Loading/>
}

export default MovieDetails;
