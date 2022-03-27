import './App.css';
import React from 'react';
import VideoPlayer from './pages/VideoPlayer'
import DashboardData from './pages/DashboardData'
import DashboardMain from './pages/DashboardMain'
import Survey from './pages/SurveyPage'
import { HashRouter, Routes, Route } from "react-router-dom";
import Consent from './pages/Consent';
import Instructions from './pages/Instructions';
import DashboardLogin from './pages/DashboardLogin';
import VideoConfigure from './pages/VideoConfigure';
import { AuthProvider } from './context/AuthContext';
import ResponseContext from './components/context/ResponseContext.js'

const userData = {
  consent: 'false'
}

//Just Launches the App
function App() {
  return (
    <AuthProvider>
      <ResponseContext.Provider value={userData}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Consent/>}/>
            <Route path="/Instructions" element={<Instructions/>}/>
            <Route path="/VideoPlayer" element={<VideoPlayer/>}/>
            <Route path="/SurveyPage" element={<Survey/>}/>
            <Route path="/DashboardData" element={<DashboardData/>}/>
            <Route path="/DashboardMain" element={<DashboardMain/>}/>
            <Route path="/DashboardLogin" element={<DashboardLogin/>}/>
            <Route path="/VideoConfigure" element={<VideoConfigure/>}/>
          </Routes>
        </HashRouter>
      </ResponseContext.Provider>
    </AuthProvider>
  );
}

export default App;