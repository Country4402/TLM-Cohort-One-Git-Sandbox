import React from 'react';
import ReactDOM from 'react-dom/client';
import{ createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><NavBar /><App /></>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
