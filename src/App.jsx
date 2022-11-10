import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home/Home'
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";





export default function App(){
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>

    </>
  );
}