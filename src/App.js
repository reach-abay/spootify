
import './App.css';
import Home from './pages/Home';
import MusicHome from './pages/MusicHome';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Routes>       
      <Route path="/" element={<Home />} />
      <Route path="/Musichome" element={<MusicHome />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
