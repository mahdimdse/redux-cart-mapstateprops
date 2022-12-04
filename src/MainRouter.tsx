import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Cart from './components/cart';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Cart />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;