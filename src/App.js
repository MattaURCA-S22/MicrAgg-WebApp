import './App.css';
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Consent from './pages/Consent';
import Instructions from './pages/Instructions';
import DashboardLogin from './pages/DashboardLogin';
import VideoConfigure from './pages/VideoConfigure';
import { AuthProvider } from './context/AuthContext';
import { ResponseProvider } from './context/ResponseContext.js';
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
            <Route path="/DashboardData" element={<SurveyEnded/>}/>
            <Route path="/DashboardMain" element={<SurveyEnded/>}/>
            <Route path="/DashboardLogin" element={<SurveyEnded/>}/>
            <Route path="/VideoConfigure" element={<SurveyEnded/>}/>
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