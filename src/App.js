import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Products from './pages/home/Products'
import Mangos from './pages/mangos/Mangos'
import Lychees from './pages/lychees/Lychees'
import Seeds from './pages/seeds/Seeds'
import Chemistry from './pages/chemistry/Chemistry'
import Contact from './pages/contact/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Products />
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
