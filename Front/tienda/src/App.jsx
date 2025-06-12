
import React, { useState } from 'react';
import LoginPage from './componentes/LoginPage';
import ShopPage from './componentes/ShopPage';
import './styles/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductDetail from './componentes/Productdetail';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    console.log('Usuario ha iniciado sesión');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    console.log('Usuario ha cerrado sesión');
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      <Routes>
        <Route 
          path="/login" 
          element={
            isLoggedIn ? <Navigate to="/" replace /> : <LoginPage onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/" 
          element={
            isLoggedIn ? <ShopPage onLogout={handleLogout} /> : <Navigate to="/login" replace />
          } 
        />
        <Route 
          path="/producto/:id" 
          element={
            isLoggedIn ? <ProductDetail /> : <Navigate to="/login" replace />
          } 
        />
      </Routes>
      
    </div>
  );
}

export default App;
