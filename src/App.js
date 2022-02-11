import './App.css';
import VideoPlayer from './pages/VideoPlayer'
import DashboardData from './pages/DashboardData'
import { HashRouter, Routes, Route } from "react-router-dom";

//Just Launches the App
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/VideoPlayer" element={<VideoPlayer/>}/>
        <Route path="/" element={<DashboardData/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;