import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
