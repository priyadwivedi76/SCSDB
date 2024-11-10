import React from "react";
import SideNav from "./templates/SideNav";

const Home=()=>{
    document.title="SCSDB | Home";
    return(
        <>
            <SideNav/>
            <div className="w-[80%] h-full"></div>
        </>
    )
}

export default Home;