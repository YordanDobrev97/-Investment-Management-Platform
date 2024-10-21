'use client'

import Link from "next/link"
import Image from 'next/image'
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
            <Link className={`logo`} href={`/`}>
                Finix
            </Link>

            <ul className={`menu-items`}>
                <li className={`menu-item`}>
                    <Link href='/'>Home</Link>
                </li>
                <li className={`menu-item`}>
                    <Link href='/about'>About</Link>
                </li>
                <li className={`menu-item`}>
                    <Link href='/portfolio'>Markets</Link>
                </li>
                <li className={`menu-item`}>
                    <Link href='/'>Trends</Link>
                </li>
            </ul>

            <button className={`login-btn`}>
                <Link href='/login'>Login</Link>
            </button>
            {/* <ul className={`menu ${isOpenMenu ? 'open': ''}`}>
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

            <Link href='/login' className={`btn-login ${isOpenMenu ? 'open': ''}`}>Login</Link> */}
        </nav>
    )
}

export default Navbar