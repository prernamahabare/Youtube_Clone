import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import SearchPage from './components/SearchPage'
import MapTutorial from './components/MapTutorial';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header />
            <div className="app_components">
              <Sidebar />
              <RecommendedVideos />
            </div></>} />
          <Route path='/search/:searchItem' element={<><Header />
            <div className="app_components">
              <Sidebar />
              <SearchPage />
            </div></>}></Route>
            <Route path="/map" element={<MapTutorial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
