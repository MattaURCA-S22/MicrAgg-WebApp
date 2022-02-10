import './App.css';
import VideoPlayer from './pages/VideoPlayer'
import DashboardLogin from './pages/DashboardLogin'
import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './AuthContext';

//Just Launches the App
function App() {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<VideoPlayer/>}/>
          {/* use /#/login - to get to the login page */}
          <Route path="login" element={<DashboardLogin/>}/>
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
}

export default App;