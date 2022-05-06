import './App.css';
import React, { useState } from 'react';
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
import { ResponseProvider } from './context/ResponseContext.js';
import DemographicSurvey from './pages/DemographicSurvey';
import SurveyCompletePage from './pages/SurveyComplete';
import StudentCompletionPage from './pages/StudentCompletionPage';
import ThankYouPage from './pages/ThankYouPage';


//Just Launches the App
function App() {
  return (
    <AuthProvider>
      <ResponseProvider>
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
            <Route path="/DemographicSurvey" element={<DemographicSurvey/>}/>
            <Route path="/SurveyComplete" element={<SurveyCompletePage/>}/>
            <Route path="/StudentCompletePage" element={<StudentCompletionPage/>}/>
            <Route path="ThankYouPage" element={<ThankYouPage/>}/>
          </Routes>
        </HashRouter>
      </ResponseProvider>
    </AuthProvider>
  );
}

export default App;
export {}