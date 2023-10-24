import './App.css';
import Ebook from './component/pages/books/E-books';
import Library from './component/pages/books/Library';
import Home from './component/pages/home/Home';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes

import PaymentForm from './component/pages/payment/Payment';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes> {/* Wrap your routes with a <Routes> component */}
          <Route path='/payment' element={<PaymentForm />} />
          <Route path='/book' element={<Library /> } />
        </Routes>
        <Home />
      </Router>
    </div>
  );
}

export default App;
