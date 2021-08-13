import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ( {isOpen, toggle} ) => {
  const icon = !isOpen ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg> : 
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;

  return (
    <header className='flex justify-between items-center h-16 bg-yellow-600 text-white shadow-sm fixed z-50 w-full'>
      <NavLink to='/' className='flex items-center font-extrabold text-white no-underline hover:text-white hover:no-underline px-4 text-xl'>Melon Special</NavLink>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        { icon }
      </div>
      <nav className="hidden md:block p-4 text-white">
        <ul className="flex flex-wrap justify-center">
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/melons" className="transition-colors hover:text-yellow-900">
              Melons
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/mangos" className="transition-colors hover:text-yellow-900">
              Mangos
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/lychees" className="transition-colors hover:text-yellow-900">
              Lychees
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/seeds" className="transition-colors hover:text-yellow-900">
              Seeds
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/chemistry" className="transition-colors hover:text-yellow-900">
              Chemistry
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/contact" className="transition-colors hover:text-yellow-900">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
