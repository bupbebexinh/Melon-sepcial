import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {NavLink} from 'react-router-dom';
// import { Input } from 'antd'
import Header from './components/Header'
import Products from './pages/home/Products'
import Melons from './pages/melons/Melons'
import Mangos from './pages/mangos/Mangos'
import Lychees from './pages/lychees/Lychees'
import Seeds from './pages/seeds/Seeds'
import Chemistry from './pages/chemistry/Chemistry'
import Contact from './pages/contact/Contact'
import Footer from './components/Footer'
import DropdownNav from './components/DropdownNav'
import Search from './components/Search';

const App = () => {
  //Drowpdown Nav
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        // console.log('view PC');
      }
    };

    return () => {
      window.addEventListener('resize', hideMenu);
    }
  });

  //search
  const [keyword, setKeyword] = useState('');

  function handleInputChange(e) {
    setKeyword(e.target.value)
  }

  const clearSearch = () => {
    setKeyword('');
  }

  return (
    <Router>
      <Header isOpen={isOpen} toggle={toggle} />
      <DropdownNav isOpen={isOpen} toggle={toggle} />
      <div className="px-5 h-11 top-16 bg-blue-800 leading-none text-white shadow-sm fixed z-50 w-full flex justify-center">
        <div className="relative md:w-3/6 block h-10 flex-grow md:flex-grow-0">
          <input type = "search" className="px-3 text-black w-full block h-10" 
            placeholder="Search by product" 
            value={keyword}
            onChange={handleInputChange}
            // onSearch={handleSearch}
            // enterButton
          />
          <span className={keyword ? 'h-10 px-3 cursor-pointer flex justify-center items-center absolute top-0 right-0' : 'hidden' } onClick={clearSearch}>
            <svg className="w-6 h-6" fill="none" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </span>
        </div>
        <NavLink to="/search" className={keyword ? 'w-20 h-10 flex justify-center items-center text-black bg-yellow-400' : 'w-20 h-10 flex justify-center items-center text-black pointer-events-none bg-gray-400'}>
          Search
        </NavLink>
      </div>

      <main className="pt-28">
        <Switch>
          <Route path="/" exact>
            <Products />
          </Route>
          <Route path="/search" exact>
            <Search keyword={keyword} />
          </Route>
          <Route path="/melons" exact>
            <Melons />
          </Route>
          <Route path="/mangos" exact>
            <Mangos />
          </Route>
          <Route path="/lychees" exact>
            <Lychees />
          </Route>
          <Route path="/seeds" exact>
            <Seeds />
          </Route>
          <Route path="/chemistry" exact>
            <Chemistry />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  )
}

export default App
