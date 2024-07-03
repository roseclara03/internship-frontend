import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Component/style.css';
import Nav from './Component/Navbar.jsx';
import Port from './Component/portfolio.jsx';
import Regis from './Component/Register.jsx';
import About1 from './Component/aboutus.jsx';
import Home from './Component/Homepage1.jsx';
import Fournotfour from './Component/Four.jsx';
import Login2 from './Component/Login1.jsx';
import Forgot from './Component/Forgotpassword.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='app1'>
        <Nav />
        <div className='app2'>
          <Port />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Regis />} />
            <Route path="/login" element={<Login2 />} />
            <Route path="/forgot" element={<Forgot />} />
          </Routes>
        </div>
      </div>

      {/* Render About1 outside of the main content div */}
      <Routes>
        <Route path="/about" element={<About1 />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
