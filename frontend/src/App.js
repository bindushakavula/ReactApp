import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './frontend/components/Navbar';  
import Home from './frontend/pages/Home';          
import Login from './frontend/pages/Login';        
import SignUp from './frontend/pages/Signup';      
import AccountOverview from './frontend/pages/AccountOverview'; 
import Dashboard from './frontend/pages/Dashboard'; 
import Profile from './frontend/pages/Profile';
import './styles.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  React.useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setLoginStatus={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login  setLoginStatus={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/accountoverview" element={<AccountOverview />} />
        <Route path="/dashboard" element={<Dashboard />} /> {}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
