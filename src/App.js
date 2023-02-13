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
import SurveyEnded from './pages/SurveyEnded';


//Just Launches the App
function App() {
  return (
    <AuthProvider>
      <ResponseProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<SurveyEnded/>}/>
            <Route path="/Instructions" element={<SurveyEnded/>}/>
            <Route path="/VideoPlayer" element={<SurveyEnded/>}/>
            <Route path="/SurveyPage" element={<SurveyEnded/>}/>
            <Route path="/DashboardData" element={<DashboardData/>}/>
            <Route path="/DashboardMain" element={<DashboardMain/>}/>
            <Route path="/DashboardLogin" element={<DashboardLogin/>}/>
            <Route path="/VideoConfigure" element={<VideoConfigure/>}/>
            <Route path="/DemographicSurvey" element={<SurveyEnded/>}/>
            <Route path="/SurveyComplete" element={<SurveyEnded/>}/>
            <Route path="/StudentCompletePage" element={<SurveyEnded/>}/>
            <Route path="ThankYouPage" element={<SurveyEnded/>}/>
          </Routes>
        </HashRouter>
      </ResponseProvider>
    </AuthProvider>
  );
}

export default App;
export {}