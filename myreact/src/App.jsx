import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFound';

const App = () => {
  return(
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/> 
          <Route path="/product/:id/:name" element={<ProductPage/>}/> 
          <Route path="/profile/:facebookId/:youtubeId " element={<ProfilePage/>}/> 
          <Route path="*" element={<NotFound/>}/> 
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
