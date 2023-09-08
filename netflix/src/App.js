import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Show from './pages/Show';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={
            <React.Fragment>
              {/* <Header /> */}
              <Login />
            </React.Fragment>
          } />
          <Route path="/register" element={
            <React.Fragment>
              {/* <Header /> */}
              <Login />
            </React.Fragment>
          } />
          <Route path="/Show" element={<Show />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
