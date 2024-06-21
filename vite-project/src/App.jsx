import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import SingleProductPage from './pages/SingleProductPage';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ManageProducts from './pages/Manage-Products';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import SubAdmin from './pages/SubAdmin';
import AddSubAdmin from './pages/AddSubAdmin';
import Support from './pages/Support';
import { Toaster } from 'sonner';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/manage-products" element={<ManageProducts />} />
          <Route path="/add-products" element={<AddProduct />} />
          <Route path="/edit-products/:id" element={<EditProduct />} />
          <Route path="/SubAdmin" element={<SubAdmin />} />
          <Route path="/add-SubAdmin" element={<AddSubAdmin />} />
          <Route path="/support" element={<Support />} />
        
        </Routes>
    </Router>
  );
}

export default App;
