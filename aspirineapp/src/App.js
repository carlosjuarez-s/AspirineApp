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

  //Pongan true o false para cambiar inicio y probar si quieren
  if(!token){
    console.log("No existe token");
    return(
      <div>
        <h1>Welcome!</h1>
        <Router>
          <Routes>
            <Route path="/*" element={<Login setToken={setToken} />}/>
          </Routes>
        </Router>
      </div> 
    )
  }else {
    console.log(token)
    return (
      <div>
        <Router>  
          <Navbar/>
           <Routes>
              <Route path="/*" element={<Home data={token}/>}/>
              <Route path="/recordshift" element={<RecordShift/>}/>
              <Route path="/profile" element={<Profile data={token}/>}/>
              <Route path="/SignUp" element={<NewUser/>}/>
           </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
