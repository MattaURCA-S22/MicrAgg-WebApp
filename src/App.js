import './App.css';
import VideoPlayer from './pages/VideoPlayer'
import DashboardLogin from './pages/DashboardLogin'
import { HashRouter, Routes, Route } from "react-router-dom";

//Just Launches the App
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DashboardLogin/>}/>
//        <Route path="/" element={<VideoPlayer/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;