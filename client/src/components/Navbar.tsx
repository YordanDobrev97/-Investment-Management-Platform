'use client'

import Link from "next/link"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import '../styles/navbar/navbar.scss'

const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const openMenuHandler = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    return (
        <nav className='navbar'>
            <ul className={`menu ${isOpenMenu ? 'open' : ''}`}>
                <li>
                    <Link className='active' href='home'>Home</Link>
                </li>

                <li>
                    <Link href='aboutUs'>AboutUs</Link>
                </li>

                <li>
                    <Link href='services'>Services</Link>
                </li>

                <li>
                    <Link href='services'>Contact</Link>
                </li>
            </ul>

            <button className='btn-burger' onClick={openMenuHandler}>
                <GiHamburgerMenu />
            </button>

            <button className='btn-login'>Login</button>
        </nav>
    )
}

export default Navbar