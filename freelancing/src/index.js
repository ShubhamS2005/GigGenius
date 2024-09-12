import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home'
import './input.css';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import About from './components/About/About';
import Services from './components/Services/Services';
import Login from './components/Login/Login';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import { Auth0Provider } from '@auth0/auth0-react';

const router= createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"pricing",
        element:<Pricing/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"login",
        element:<Login/>
      }

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Auth0Provider
  domain="dev-awjryvwr8uidhlh4.us.auth0.com"
  clientId="HPz2RRJ5uWkNq2sdSSpnnMKyjhn8Hxt2"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
