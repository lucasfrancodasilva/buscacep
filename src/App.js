import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import Credits from './credits';
import Contato from './contato';
import Maps from './maps';

function App() {
  return (
    <div>
      <nav>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/maps" exact element={<Maps />} />
          </Routes>
        </Router>
      </nav>
    </div>
  );
}

export default App;
