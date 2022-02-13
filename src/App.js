import './App.css';
import VideoPlayer from './pages/VideoPlayer'
import DashboardData from './pages/DashboardData'
import DashboardMain from './pages/DashboardMain'
import Survey from './pages/Survey'
import { HashRouter, Routes, Route } from "react-router-dom";
import Consent from './pages/Consent';

//Just Launches the App
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/VideoPlayer" element={<VideoPlayer/>}/>
        <Route path="/" element={<DashboardData/>}/>
        <Route path="/videoPlayer" element={<VideoPlayer/>}/>
        <Route path="/DashboardMain" element={<DashboardMain/>}/>
        <Route path="/Survey" element={<Survey/>}/>
        <Route path="/" element={<Consent/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;