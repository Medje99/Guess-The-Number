import React from 'react'
import Sidebar from './Sidebar'
import Game from './Game'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className='container'>
            
            <header>
              <h1>Guess The Number</h1>
              <Link to='/rules' className='rulesLink'>Rules</Link>
            </header>

        <div className='main'>
            <Sidebar/>
            <Game/>
        </div>

    </div>
  )
}

export default Main