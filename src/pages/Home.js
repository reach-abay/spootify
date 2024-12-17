import { authContext } from "../App.js";
import { useContext } from "react";


export default function Home() {
    const { refreshToken, setRefreshToken,authToken,setAuthToken } = useContext(authContext);

    return (<div>Music HOme{authToken}</div>)
}