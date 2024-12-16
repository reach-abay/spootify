import classes from './Home.module.css'
import logo from '../Photos/logo.png'
import { useLocation } from 'react-router-dom';     
import { useNavigate } from 'react-router-dom';


export default function Home() {

    const location = useLocation();
    const params = new URLSearchParams(location.hash || location.search);
    const code = params.get('code');
    const navigate = useNavigate(); 
    // console.log('Authorization Code:', code);  


    const postData = new URLSearchParams({
        grant_type: "authorization_code",
        redirect_uri: "http://localhost:3000/",
        code: code
    });

    if(code!=null){
        //insert API here
        fetch("https://accounts.spotify.com/api/token",{
        method:"POST",
        headers:{
            "Content-type":"application/x-www-form-urlencoded",
            "Authorization":"Basic MzIyODg5NWZlYjE2NDdiZjk1NjZmYmY0NWNkMTM4NTc6NTk5NDJhMGMwZjUyNGNiNjk3ZjQyYzQzYjQ1NmQyZjg="
        },
        body:postData
        }).then(response=>{
            if(response.status===200) {
                console.log("Auth success");
                return response.json(); 
            }
            else {
                return response.json().then(data => {
                alert("Auth Fail: " + data.error_description); // handle the error message
            });
            }

        }).then(data => {
            if (data) {
               console.log(data.access_token); // here you can access the access token from the response
               navigate('/MusicHome'); 
            }
        })
    }

    return (<div className={classes.mainDiv}>
        
        <div className={classes.contentDiv}>
            <img className={classes.logo} src={logo} alt=''></img>
            <h2 className={classes.welcomeH2}>Welcome to Spootify</h2>
            <a href='https://accounts.spotify.com/authorize?client_id=3228895feb1647bf9566fbf45cd13857&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=user-read-private%20user-read-email'  target='_blank' rel="noreferrer" className={classes.SignIn}>Sign In with Spotify
                {/* <img className={classes.logo} src={logo} alt=''></img> */}
            </a>
        </div>
            <div className={classes.footer}>
                <h5>No regard to Safety.No regard to Security.</h5>
            </div>
            <div className={classes.footer2}>
                <h6>v0.1</h6>
            </div>
        </div>)
}