import { useContext, useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from './main.jsx'
import axios from 'axios'
import NavBar from "./components/NavBar.jsx"
import Home from "./components/Home.jsx"
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
function App() {
  const {isAuthenticated,setIsAuthenticated,setUser}=useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/user/users/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
        console.log(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <Router>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>


          
      </Routes>
      <ToastContainer position='top-center' />
    </Router>
    </>
  )
}

export default App
