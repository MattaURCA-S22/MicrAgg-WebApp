import './App.css';
import VideoPlayer from './pages/VideoPlayer'
import DashboardMain from './pages/DashboardMain'
import { HashRouter, Routes, Route } from "react-router-dom";

//Just Launches the App
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<VideoPlayer/>}/>
        <Route path="/DashboardMain" element={<DashboardMain/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;