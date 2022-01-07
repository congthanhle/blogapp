import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useContext} from 'react';
import {Context }from './context/Context';
import './App.css';
import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
        <TopBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='write' element={<Write/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/post/:postID' element={<Single/>}/>
        </Routes>
    </Router>
  );
}

export default App;
