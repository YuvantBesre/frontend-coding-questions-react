import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <h1 style={{ textAlign : 'center' }}> List of Features </h1>

        <ul style={{ textAlign : 'center', listStyle : 'none' }}>
            <li>
                <Link to={'/tic-tac-toe'}> Tic Tac Toe </Link>
            </li>
            <li>
                <Link to={'/otp-input'}> OTP Input </Link>
            </li>
            <li>
                <Link to={'/progress-bar'}> Progress Bar </Link>
            </li>
            <li>
                <Link to={'/drag-drop'}> Drag And Drop </Link>
            </li>
            <li>
                <Link to={'/custom-use-effect'}> UseEffect Polyfill </Link>
            </li>
            <li>
                <Link to={'/custom-use-effect'}> UseMemo Polyfill </Link>
            </li>
        </ul>
    </>
  )
}

export default Home