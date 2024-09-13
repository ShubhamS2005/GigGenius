import React, { useContext, useState } from 'react'
import { Navigate, useNavigate ,Link} from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { Context } from '../main';
const Login = () => {
  const navigateTo=useNavigate()
  const {isAuthenticated,setIsAuthenticated}=useContext(Context);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [role,setRole]=useState("");
  const handleLogin=async(e)=>{
    e.preventDefault()
    try {
      await axios.post(
        "http://localhost:8000/api/v1/user/login",
        { email, password, confirmPassword, role: role},
        {
        withCredentials:true,
        headers:{'Content-Type':"application/json"}
      }).then((res)=>{
        toast.success(res.data.message)
        setIsAuthenticated(true)
        navigateTo("/")
        setEmail("");
          setPassword("");
          setConfirmPassword("");
      })
    } catch (error) {
      toast.error(error.response.data.message)
    }
  } 
  if(isAuthenticated){
    return <Navigate to={'/'}/>
  }
    const handleClose=()=>{
        navigateTo("/")
    }
  return (
    <>
        <div id="login-popup" tabIndex="-1"
    className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
    <div className="relative p-4 w-full max-w-md h-full md:h-auto">

        <div className="relative bg-white rounded-lg shadow">
            <button type="button"
                onClick={handleClose}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"><svg
                    aria-hidden="true" className="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">Close popup</span>
            </button>

            <div className="p-5">
                <h3 className="text-2xl mb-0.5 font-medium"></h3>
                <p className="mb-4 text-sm font-normal text-gray-800"></p>

                <div className="text-center">
                    <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                        Login to your account
                    </p>
                    <p className="mt-4 mb-7 text-sm leading-4 text-slate-600">
                        You must be logged in to perform this action.
                    </p>
                </div>
                <form className="w-full" onSubmit={handleLogin}>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input name="email" type="email" autoComplete="email" required=""
                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Email Address" value={email}
                        onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input name="password" type="password" autoComplete="current-password" required=""
                        className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Password" value={password}
                        onChange={(e) => setPassword(e.target.value)}/>

                    <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                    <input name="confirmPassword" type="password" autoComplete="current-password" required=""
                        className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Confirm Password" value={confirmPassword}
                        onChange={(e) =>setConfirmPassword(e.target.value)}/>

                    <label htmlFor="role" className="sr-only">Role</label>
                    <input name="role" type="text"  required=""
                        className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Role" value={role}
                        onChange={(e) =>setRole(e.target.value)}/>

                    {/* <p className="mb-3 mt-2 text-sm text-gray-500">
                        <a href="/htmlForgot-password" className="text-blue-800 hover:text-blue-600">Reset your password?</a>
                    </p> */}
                    <button type="submit"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">
                        Continue
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-600">
                    Don't have an account?
                    <a href="/signup" className="font-medium text-[#4285f4]">Sign up</a>
                </div>
            </div>
        </div>
    </div>
</div>    
    </>   
  );
};


export default Login;
