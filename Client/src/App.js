import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './components/Pages/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home'
import RecordShift from './components/Pages/RecordShift/RecordShift'
import Profile from './components/Pages/Profile/Profile'
import NewUser from './components/Users/NewUser'
import useToken from './components/Security/token'


function App() {
  const { token, setToken } = useToken();

  if(!token){
    return(
      <div>
        <Router>
          <Routes>
            <Route path="/*" element={<Login setToken={setToken} />}/>
            <Route path="/SignUp" element={<NewUser/>}/>
          </Routes>
        </Router>
      </div> 
    )
  }else {
    return (
      <div>
        <Router>  
          <Navbar/>
           <Routes>
              <Route path="/*" element={<Home/>}/>
              <Route path="/recordshift" element={<RecordShift/>}/>
              <Route path="/profile" element={<Profile/>}/>
           </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
