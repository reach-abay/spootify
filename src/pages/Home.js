import { authContext } from "../App.js";
import { useContext } from "react";
import classes from './Home.module.css'
import Navbar from "../components/NavBar.js";



export default function Home() {
    const { refreshToken, setRefreshToken,authToken,setAuthToken } = useContext(authContext);

    return (
    <div className={classes.mainDiv}>Music HOme
        <Navbar></Navbar>


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