import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreens from "./Screens/HomeScreens";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
      <Container>
      <Routes>
       <Route path="/" element={<HomeScreens/>}/>
       <Route path="/product/:id" element={<ProductScreen/>}/>
       <Route path="/cart/:id" element={<CartScreen/>}/>
      </Routes>
      </Container>
      </main>
      <Footer />
  </Router>
  );
}

export default App;
