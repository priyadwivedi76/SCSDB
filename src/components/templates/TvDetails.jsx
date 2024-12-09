import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncloadTv } from "../../store/actions/tvAction";
import {removeTV} from "../../store/actions/tvAction";
import { Link,Outlet } from "react-router-dom";
import Loading from "../../components/Loading"
import { useLocation } from "react-router-dom";
import HorizontalCards from '../../components/templates/HorizontalCards'



const TvDetails=() =>{
    const {pathname}=useLocation();
    const navigate=useNavigate()
    const {id}=useParams();
    const {info}=useSelector(state=>state.tv)
    console.log(info)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(asyncloadTv(id))
        return ()=>{
            dispatch(removeTV())
        }
    },[id])

    return info ? (
        <>
        <div style={{
            background:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
            backgroundPosition:`center`,
            backgroundSize:`cover`
        }} className="relative w-screen min-h-[200vh] px-[10%]">
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

            <div className='w-full flex'>
                <img className="h-[50vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]" src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path||info.detail.backdrop_path}`} alt="" />

                <div className="content ml-[5%]">
                    <h1 className="text-4xl font-bold text-white">{info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
                        <small className="text-2xl text-zinc-400">({info.detail.first_air_date.split('-')[0]})</small>
                    </h1>

                    <div className="mt-3 mb-10 flex text-white gap-y-5 gap-x-5 items-center">
                        {info.detail.vote_average && (<div className="h-[7vh] w-[7vh] font-semibold text-xl rounded-full bg-yellow-700 text-white flex items-center justify-center">{(info.detail.vote_average*10).toFixed()} <sup>%</sup></div>)}
                        <h1 className="font-semibold text-xl">User Details</h1>
                        <h1>{info.detail.release_date}</h1>
                        <h1>{info.detail.genres.map(g => g.name).join(",")}</h1>
                        <h1>{info.detail.runtime}mins</h1>
                    </div>

                    <h1 className="text-xl font-semibold italic text-zinc-200">{info.detail.tagline}</h1>

                    <h1 className='text-2xl text-white mt-3 mb-2'>Overview</h1>
                    <p className="text-white">{info.detail.overview}</p>

                    <h1 className='text-2xl text-white mt-3 mb-2'>Available Translation:</h1>
                    <p className="text-white mb-5">{info.translations.join(", ")}</p>

                    <Link className="text-white bg-[#6556CD] px-5 py-3 rounded-lg"  to={`${pathname}/trailer`}>
                    <i className="text-xl ri-play-fill mr-2"></i>
                    Play Trailer</Link>
                </div>
            </div>

            <div className="w-[80%] flex flex-col gap-y-10">
                    {info.watchProvider && info.watchProvider.flatrate && 
                    <div className="flex items-center gap-x-10">
                        <h1 className="font-semibold text-md text-white">Available on Platform:</h1>
                        {info.watchProvider.flatrate.map((data,index) => 
                            ((<img title={data.provider_name} className="w-[5vh] h-[5vh] object-cover rounded-md m-1" key={index} src={`https://image.tmdb.org/t/p/original/${data.logo_path}`}/>)))}
                    </div>}


                    {info.watchProvider && info.watchProvider.rent && 
                    <div className="flex items-center gap-x-10"> 
                        <h1 className="font-semibold text-md text-white">Available on Rent:</h1>
                        {info.watchProvider.rent.map((data,index) => 
                            ((<img title={data.provider_name} className="w-[5vh] h-[5vh] object-cover rounded-md m-1" key={index} src={`https://image.tmdb.org/t/p/original/${data.logo_path}`}/>)))}
                    </div>}

                    {info.watchProvider && info.watchProvider.buy && 
                    <div className="flex items-center gap-x-10">
                        <h1 className="font-semibold text-md text-white">Available on Buy:</h1>
                        {info.watchProvider.buy.map((data,index) => 
                            ((<img title={data.provider_name} className="w-[5vh] h-[5vh] object-cover rounded-md m-1" key={index} src={`https://image.tmdb.org/t/p/original/${data.logo_path}`}/>)))}
                    </div>}
            </div>

            <div className="h-[50vh]">
                <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500'/>
                <h1 className="font-semibold text-2xl text-white mb-5">Seasons:</h1>
                <div className="w-[100%] flex overflow-y-hidden px-5">
                    {info.detail.seasons.map((m,i)=>{
                        return(
                            <div className="w-[20vw] mr-[5%] mb-5">
                                <img className="h-[30vh] min-w-[10vw] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]" src={`https://image.tmdb.org/t/p/original/${m.poster_path}`} alt="" />
                                <h1 className="font-semibold text-md mt-3 text-zinc-400">{m.name || m.title || m.original_name ||m.original_title}</h1>
                            </div>
                    )
                    })}
                </div>
            </div>

            <div className="h-[50vh]">
                <hr className='mt-10 mb-5 border-none h-[2px] bg-zinc-500'/>
                <h1 className="font-semibold text-2xl text-white">Recommendations:</h1>
                <HorizontalCards data={info.recommendation.length>0 ? info.recommendation : info.similarity }/>
                    <Outlet/>
            </div>
        </div>
        </>
    ):<Loading/>
}

export default TvDetails;