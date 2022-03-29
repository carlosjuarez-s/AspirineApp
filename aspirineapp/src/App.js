import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import LoggedIn from './components/Pages/Logged In/LoggedIn'
import RecordShift from './components/Pages/RecordShift/RecordShift'

function App() {
  return (
    <div>
      <Router>  
        <Navbar/>
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
