import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Pages/Login/Login'
import Navbarout from './components/Navbar/NavBarOut/Navbarout'
import Home from './components/Pages/Home/Home'
// import NavbarIn from './components/Navbar/NavbarIn/Navbarin'
import LoggedIn from './components/Pages/Logged In/LoggedIn'
import RecordShift from './components/Pages/RecordShift/RecordShift'

function App() {
  return (
    <div>
      <Router>  
        <Navbarout/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/LoggedIn" element={<LoggedIn/>}/>
            <Route path="/recordshift" element={<RecordShift/>}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
