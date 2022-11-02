import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Blogpage from './pages/Blogpage';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App(props) {
  return (
    <div className="container">
      <Router basename={process.env.PUBLIC_URL}>
        <Header navItems={["Home","Projects","Blog","Contact"]} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='blog/*' element={<Blogpage />} />
          <Route exact path='projects' element={<Projects />} />
          <Route exact path='contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App;