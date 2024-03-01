import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex bg-white border-gray-200'>
        <Link href='/'>Logo</Link>
        <ul className='flex '>
            <li>Dashboard</li>
            <li>Issue</li>
        </ul>
    </nav>
  )
}

export default NavBar