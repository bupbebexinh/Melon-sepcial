import React from 'react';
import {NavLink} from 'react-router-dom';

const DropdownNav = ({isOpen, toggle}) => {
  return (
    <>
      <nav className={isOpen ? 'grid grid-rows text-center items-center bg-yellow-500 fixed w-full top-16 z-50 text-white' : 'hidden'} onClick={toggle}>
        <ul className="py-4">
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/melons" className="block py-1 transition-colors hover:text-yellow-900">
              Melons
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/mangos" className="block py-1 transition-colors hover:text-yellow-900">
              Mangos
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/lychees" className="block py-1 transition-colors hover:text-yellow-900">
              Lychees
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/seeds" className="block py-1 transition-colors hover:text-yellow-900">
              Seeds
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/chemistry" className="block py-1 transition-colors hover:text-yellow-900">
              Chemistry
            </NavLink>
          </li>
          <li className="mx-2 tracking-widest uppercase font-bold">
            <NavLink to="/contact" className="block py-1 transition-colors hover:text-yellow-900">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default DropdownNav;