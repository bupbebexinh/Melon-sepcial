import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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

const App = () => {
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

  return (
    <Router>
      <Header isOpen={isOpen} toggle={toggle} />
      <DropdownNav isOpen={isOpen} toggle={toggle} />
      <main className="pt-16">
        <Switch>
          <Route path="/" exact>
            <Products />
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
