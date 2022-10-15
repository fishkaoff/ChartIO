import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg h-24'>
        <div className="container justify-between flex">
            <Link className='title' to="/">ChartIO</Link>
            <nav className='mt-5'>
                <ul className='flex'>
                    <li>
                        <Link className='nav-item' to="/all">все</Link>
                    </li>
                    <li>
                        <Link className='nav-item' to="/about">цель</Link>
                    </li>
                    <li>
                        <Link className='nav-item' to="/communication">связь</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header