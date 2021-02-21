import Navbar from './components/navbar/index'
import Footer from './components/footer/index'
import Home from './pages/index.js'
import './styles/tailwind.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import React from 'react'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch witch>
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

