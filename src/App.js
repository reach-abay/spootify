import { createContext,useState } from "react";
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const authContext = createContext();



function App() {
  const [refreshToken,setRefreshToken]  =useState(null);
  const [authToken,setAuthToken]        =useState(null);
  const [authAlive,setAuthAlive]        =useState(false);


    //put default auth things here
  //setAuthAlive(false); uncommenting breks the page. look into this.
  



  return (
   <authContext.Provider value={{ refreshToken, setRefreshToken,authToken,setAuthToken,authAlive,setAuthAlive}}>
    <BrowserRouter>
      <Routes>       
        <Route path="/" element={<Login />} />
        <Route path="/home" element={authAlive?<Home/>:<div>Bad request. Not authorised.</div>} />
      </Routes>
    </BrowserRouter>
  </authContext.Provider>
  );
}

export default App;
