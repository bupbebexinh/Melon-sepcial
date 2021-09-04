import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import ModalLogin from './ModalLogin';
import ModalRegist from './ModalRegist';

const Header = ( {isOpen, toggle, keyword, keywordValue, clearSearch} ) => {
  const icon = !isOpen ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg> : 
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;

  const myControl = () => {
    if (!login) {
      return (
        <ul className="flex justify-center text-xs font-sans">
          <li className="mr-4">
            <ModalLogin setLogin={setLogin} />
          </li>
          <li>
            <ModalRegist />
          </li>
        </ul>
      )
    } else {
      return (
        <ul className="flex items-end text-xs font-sans">
          <li className="mr-4">
            My Page
          </li>
          <li>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </li>
        </ul>
      )
    }
  }

  function handleInputChange(e) {
    keywordValue(e.target.value)
  }

  //search
  const [login, setLogin] = useState(false);

  return (
    <div className="py-1 px-3 md:px-5 2xl:px-20">
      <header className='flex justify-between items-center h-10 w-full'>
        <div className="flex items-end">
          <h1 className="md:hidden mr-4"><NavLink to='/' className='flex items-center font-extrabold text-white no-underline hover:text-white hover:no-underline text-xl'><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></NavLink></h1>
          { myControl() }
        </div>
        <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
          { icon }
        </div>
        <nav className="hidden md:block md:w-3/5">
          <ul className="flex flex-wrap justify-center text-xs">
            <li className="mx-2 tracking-widest uppercase font-bold">
              <NavLink to="/melons" className="transition-colors hover:text-yellow-300">
                Melons
              </NavLink>
            </li>
            <li className="mx-2 tracking-widest uppercase font-bold">
              <NavLink to="/mangos" className="transition-colors hover:text-yellow-300">
                Mangos
              </NavLink>
            </li>
            <li className="mx-2 tracking-widest uppercase font-bold">
              <NavLink to="/lychees" className="transition-colors hover:text-yellow-300">
                Lychees
              </NavLink>
            </li>
            <li className="mx-2 tracking-widest uppercase font-bold">
              <NavLink to="/seeds" className="transition-colors hover:text-yellow-300">
                Seeds
              </NavLink>
            </li>
            <li className="mx-2 tracking-widest uppercase font-bold">
              <NavLink to="/chemistry" className="transition-colors hover:text-yellow-300">
                Chemistry
              </NavLink>
            </li>
            <li className="mx-2 tracking-widest uppercase font-bold">
              <NavLink to="/contact" className="transition-colors hover:text-yellow-300">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-10 flex justify-between items-center">
        <h1 className="hidden md:block"><NavLink to='/' className='flex items-center font-extrabold text-white no-underline hover:text-white hover:no-underline text-xl'>Melon Special</NavLink></h1>
        <div className="w-full md:w-3/5 leading-none text-white flex justify-center">
          <div className="relative block h-10 flex-grow">
            <input autoComplete="on" type= "search" className="form-ipt" 
              placeholder="Search by product" 
              value={keyword}
              onChange={handleInputChange}
              // onSearch={handleSearch}
              // enterButton
            />
            <span className={keyword ? 'h-10 px-3 cursor-pointer flex justify-center items-center absolute top-0 right-0' : 'hidden' } onClick={clearSearch}>
              {/* <svg className="w-6 h-6" fill="none" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> */}
            </span>
          </div>
          <NavLink to="/search" className={keyword ? 'w-20 h-10 flex justify-center items-center text-black bg-yellow-500 hover:bg-red-600 text-white hover:text-white' : 'w-20 h-10 flex justify-center items-center text-black pointer-events-none bg-gray-400'}>Search</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
