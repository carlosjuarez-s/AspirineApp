import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Pages/Login/Login'
import Navbarout from './components/Navbar/NavBarOut/Navbarout'
import Home from './components/Pages/Home/Home'

function App() {
  return (
    <div>
      <Router>  
        <Navbarout/>
         <Routes>
            <Route path="/home" element={<Home/>}/>
           <Route path="/Login" element={<Login/>}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
