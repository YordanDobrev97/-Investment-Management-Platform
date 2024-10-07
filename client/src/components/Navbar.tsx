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
        <nav className={`navbar`}>
            <ul className={`menu ${isOpenMenu ? 'open': ''}`}>
                <li className='item'>
                    <Link href='/'>Home</Link>
                </li>

                <li className='item'>
                    <Link href='aboutUs'>About</Link>
                </li>

                <li className='item'>
                    <Link href='services'>Services</Link>
                </li>

                <li className='item'>
                    <Link href='services'>Contact</Link>
                </li>
            </ul>

            <button className='btn-burger' onClick={openMenuHandler}>
                <GiHamburgerMenu />
            </button>

            <Link href='/login' className={`btn-login ${isOpenMenu ? 'open': ''}`}>Login</Link>
        </nav>
    )
}

export default Navbar