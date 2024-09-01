import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TicTacToe from './pages/TicTacToe.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/Home'
import OtpInput from './components/otpInput.jsx'


const router = createBrowserRouter([
  {
    path : '/',
    element : <HomePage />
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToe />
  },
  {
    path: "/otp-input",
    element: <OtpInput />
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
