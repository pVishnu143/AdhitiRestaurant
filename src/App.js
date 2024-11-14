import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Orders from './components/pages/Orders.js';
import Contact from './components/pages/Contact.js';
import NavBar from './components/inc/NavBar.js';
import Menu from './components/pages/Menu.js';
import Login from './components/pages/index';
import Biryani from './components/pages/Biryani.js';
import Chickencurry from './components/pages/Chickencurry.js';
import Mutton from './components/pages/Muttoncurry.js';
import Roti from './components/pages/Roti.js';
import Fish from './components/pages/Fishcurry.js';
import Nonvegstarters from './components/pages/Nonvegstarters.js';
import Rices from './components/pages/Rices.js';
import Paneer from './components/pages/Paneeritems.js';
import FriedRice from './components/pages/Friedrice.js';
import VegStarters from './components/pages/Vegstarters.js';
import Milletlump from './components/pages/Milletlump.js';
import CurdRice from './components/pages/Curdrice.js';
import './App.css';

function Content() {
  const location = useLocation();
  const noNavBarRoutes = ['/'];

  return (
    <div>
      {!noNavBarRoutes.includes(location.pathname) && <NavBar />}
      <div className="main-content">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Login />} />
          <Route path="/Biryani" element={<Biryani />} />
          <Route path="/Chickencurry" element={<Chickencurry />} />
          <Route path="/Muttoncurry" element={<Mutton />} />
          <Route path="/Roti" element={<Roti />} />
          <Route path="/Fishcurry" element={<Fish />} />
          <Route path="/Nonvegstarters" element={<Nonvegstarters />} />
          <Route path="/Rices" element={<Rices />} />
          <Route path="/Paneeritems" element={<Paneer />} />
          <Route path="/Friedrice" element={<FriedRice />} />
          <Route path="/Veg-starters" element={<VegStarters />} />
          <Route path="/Milletlump" element={<Milletlump />} />
          <Route path="/Curdrice" element={<CurdRice />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

export default App;
