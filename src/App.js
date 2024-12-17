import { createContext,useState } from "react";
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const authContext = createContext();

function App() {
  const [refreshToken,setRefreshToken]=useState(1);
  const [authToken,setAuthToken]=useState(1);

  return (
    <authContext.Provider value={{ refreshToken, setRefreshToken,authToken,setAuthToken}}>
      <BrowserRouter>
      <Routes>       
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </authContext.Provider>
  );
}

export default App;
