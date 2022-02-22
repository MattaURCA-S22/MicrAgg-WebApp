import './App.css';
import VideoPlayer from './pages/VideoPlayer'
import DashboardData from './pages/DashboardData'
import DashboardMain from './pages/DashboardMain'
import Survey from './pages/Survey'
import { HashRouter, Routes, Route } from "react-router-dom";
import Consent from './pages/Consent';
import DashboardLogin from './pages/DashboardLogin';
import VideoConfigure from './pages/VideoConfigure';
import { AuthProvider } from './AuthContext';

//Just Launches the App
function App() {
  return (
    <AuthProvider>
      <HashRouter>
      <Routes>
        <Route path="/VideoConfigure" element={<VideoConfigure/>}/>
        <Route path="/VideoPlayer" element={<VideoPlayer/>}/>
        <Route path="/DashboardData" element={<DashboardData/>}/>
        <Route path="/DashboardMain" element={<DashboardMain/>}/>
        <Route path="/DashboardLogin" element={<DashboardLogin/>}/>
        <Route path="/Survey" element={<Survey/>}/>
        <Route path="/" element={<Consent/>}/>
      </Routes>
    </HashRouter>
    </AuthProvider>
  );
}

export default App;