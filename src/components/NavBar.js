import classes from './NavBar.module.css'
import { useContext,useEffect,useState } from "react";
import { authContext } from "../App.js";
import logo from '../Photos/logo.png'


export default function Navbar(props) {

    const [userMenuActive,setUserMenuActive] = useState(false);
    const { refreshToken, setRefreshToken,authToken,setAuthToken,authAlive,setAuthAlive,userProfileData,setUserProfileData  } = useContext(authContext);

    
    useEffect(()=>{
        fetch("https://api.spotify.com/v1/me",{
            method:"GET",
            headers:{
                "Authorization":"Bearer "+authToken
            },
           
            }).then(response=>{
                if(response.status===200) {
                    return response.json(); 
                }
                else {
                    return response.json().then(data => {
                    console.log("failed miserably with : " + data.error_description); 
                });
                }
            }).then(data => {
                if (data) {
                   setUserProfileData(data);
                   console.log(data.email);
                }
            })
        
    },[userMenuActive]);
   

    return(<div className={classes.mainDiv}>
        <div className={classes.logoDiv}>
            <img className={classes.logo} src={logo} alt=''></img>
             Spootify</div>
        <div className={classes.screensDiv}>
            <div className={classes.option} onClick={props.toggleToHome}>Home</div>
            <div className={classes.option} onClick={props.toggleToPlaylists}>Playlists</div>
            <div className={classes.option} onClick={props.toggleToSearch}>Search</div>
        </div>
        <div className={classes.userMenuDiv} onClick={()=>{setUserMenuActive(!userMenuActive)}} >
            {userProfileData.display_name}
            {userMenuActive?<div className={classes.userDataDiv} >
                <div>{userProfileData.email}</div>
                <div>{userProfileData.country}</div>
            </div>:''}
        </div>
    </div>)
}