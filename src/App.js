import './App.css';
import VideoPlayer from './pages/VideoPlayer'
import { HashRouter, Routes, Route } from "react-router-dom";

//Just Launches the App
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<VideoPlayer/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;