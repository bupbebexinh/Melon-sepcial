import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="bg-yellow-600 py-4 text-white">
        <ul className="flex flex-wrap justify-center">
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/" className="transition-colors hover:text-yellow-900">
              Home
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
    </>
  )
}

export default Header
