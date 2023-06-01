import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import net1 from './../../public/assets/net2.png'

const Header = () => {
    return (
        <div className='container'>
            <header className='header'>
                <div className='bgimg'>
                    <img src={net1} alt="logo" />
                </div>
                <nav>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/latest'>Latest</Link>
                    </li>

                    <li>
                        <Link to='/popular'>Popular</Link>
                    </li>

                    <li>
                        <Link to='/cart'>Cart</Link>
                    </li>
                </nav>
            </header>
        </div>
    )
}

export default Header
