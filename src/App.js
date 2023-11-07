import React from 'react';
import './App.css';
import Home from './component/pages/home/Home';
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
import Catlog from './component/pages/catlog/Catlog';
import About from './component/pages/about/About';
import Contact from './component/pages/contact/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import NotFound from './component/pages/NotFound/Notfound';
import PaymentForm from './component/pages/payment/Payment';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes> {/* Wrap your routes with a <Routes> component */}
          <Route path='/' element={<Home /> } />
          <Route path='/gift-catalogue' element={<Catlog />} />
          <Route path='/about' element={<About /> } /> 
          <Route path='/contact' element={<Contact /> } /> 
          <Route path='*' element={<NotFound />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
