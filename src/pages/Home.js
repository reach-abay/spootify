import { authContext } from "../App.js";
import { useContext, useEffect, useState } from "react";
import classes from './Home.module.css'
import Navbar from "../components/NavBar.js";
import Search from "../components/Search.js";
import HomeContent from "../components/HomeContent.js";
import Playlists from "../components/Playlists.js";
import Player from "../components/Player.js";



export default function Home() {
    const [homeContentView,setHomeContentView] =useState(true);
    const [playistsView,setPlaylists]          =useState(false);
    const [searchView,setSearch]               =useState(false);

    function toggleToHome(){
        setHomeContentView(true);
        setPlaylists(false);
        setSearch(false);
    }
    function toggleToPlaylists(){
        setHomeContentView(false);
        setPlaylists(true);
        setSearch(false);
    }
    function toggleToSearch(){
        setHomeContentView(false);
        setPlaylists(false);
        setSearch(true);
    }
    const { refreshToken, setRefreshToken,authToken,setAuthToken,authAlive,setAuthAlive,userProfileData,setUserProfileData } = useContext(authContext);

    return (
    <div className={classes.mainDiv}>
        <Navbar
            toggleToHome={toggleToHome}
            toggleToPlaylists={toggleToPlaylists}
            toggleToSearch={toggleToSearch}
            > 
            
        </Navbar>
        <Player></Player>
        {homeContentView?<HomeContent></HomeContent>:''}
        {playistsView?<Playlists></Playlists>:''}
        {searchView?<Search></Search>:''}
        
        <div className={classes.authDiv}>
            <div>
                Auth Token: {authToken}
            </div>
            <div>
                Refresh Token: {refreshToken}
            </div>
        </div>
    </div>)
}