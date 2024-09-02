import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TicTacToe from './pages/TicTacToe.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx"
import HomePage from './pages/Home'
import OtpInput from './components/otpInput.jsx'
import ProgressBar from './pages/ProgressBar.jsx';
import DragAndDrop from './pages/DragAndDrop.jsx';
import CustomUseEffect from './pages/CustomUseEffect.jsx';
import TrafficLight from './pages/TrafficLight.jsx';


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
  {
    path: "/progress-bar",
    element: <ProgressBar />
  },
  {
    path: "/drag-drop",
    element: <DragAndDrop />
  },
  {
    path: "/custom-use-effect",
    element: <CustomUseEffect />
  },
  {
    path: "/traffic-light",
    element: <TrafficLight />
  },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
