import Link from 'next/link'
import React from 'react'
import { RiBug2Fill } from "react-icons/ri";


const links = [
  {label: 'Dashboar', href:'/'},
  {label: 'Issue', href:'/'}
]

const NavBar = () => {
  return (
    <nav className='flex space-x-6 border-b p-5 font-bold'>
        <Link className='mt-1' href='/'><RiBug2Fill /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => <li key={link.href} className='text-zinc-500 hover:text-zinc-800'><Link href={link.href}>{link.label}</Link></li>)}
        </ul>
    </nav>
  )
}

export default NavBar