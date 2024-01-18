import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/> 
          <Route path="/product" element={<ProductPage/>}/> 
          <Route path="/profile" element={<ProfilePage/>}/> 
          <Route path="*" element={<NotFound/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
