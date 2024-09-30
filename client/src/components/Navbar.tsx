import Link from "next/link"

import '../styles/navbar/navbar.scss'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='menu'>
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

            <button>Login</button>
        </nav>
    )
}

export default Navbar