import React from "react"
import { Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import Trending from "./components/Trending"
import Popular from "./components/Popular"
import Movies from "./components/Movies"
import TvShows from "./components/TvShows"
import People from "./components/People"
import MovieDetails from "./components/templates/MovieDetails"
import TvDetails from "./components/templates/TvDetails"
import PersonDetails from "./components/templates/PersonDetails"
import Trailer from "./components/templates/Trailer"
import NotFound from "./components/NotFound"
function App() {

  return (
    <>
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/movie" element={<Movies/>}/>
        <Route path="/movie/details/:id" element={<MovieDetails/>}>
          <Route path="/movie/details/:id/trailer" element={<Trailer/>}/>
        </Route>
        <Route path="/tv" element={<TvShows/>}/>
        <Route path="/tv/details/:id" element={<TvDetails/>}>
          <Route path="/tv/details/:id/trailer" element={<Trailer/>}/>
        </Route>
        <Route path="/person" element={<People/>}/>
        <Route path="/person/details/:id" element={<PersonDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
