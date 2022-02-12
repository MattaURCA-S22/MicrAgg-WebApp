import './App.css';
import VideoPlayer from './pages/VideoPlayer'
import DashboardMain from './pages/DashboardMain'
import Survey from './pages/Survey'
import { HashRouter, Routes, Route } from "react-router-dom";

//Just Launches the App
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/videoPlayer" element={<VideoPlayer/>}/>
        <Route path="/DashboardMain" element={<DashboardMain/>}/>
        <Route path="/" element={<Survey/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;