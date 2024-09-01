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
        </ul>
    </>
  )
}

export default Home