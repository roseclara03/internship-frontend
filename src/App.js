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
    <>
     
      <div className='app1'>
        <Nav />
      
        <div className='app2'>
        <Port />
        
           <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Regis />} />
          <Route path="/login" element={<Login2 />} />
          <Route path="/forgot" element={<Forgot />} />
          
         
          <Route path="/about" element={<About1 />} />
          <Route path="/*" element={<Fournotfour/>} />
            
        
          <Route path="/home" element={<Home/>} />
          

        </Routes>
      </BrowserRouter>
          
          
        </div>
      
      </div>
     
    </>
  );
}

export default App;
