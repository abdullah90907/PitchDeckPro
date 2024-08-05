import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Investor from './Investor';
import EntrepreneurDashboard from './EntrepreneurDashboard';
import SignIn from './SignIn';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/EntrepreneurDashboard" element={<EntrepreneurDashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
