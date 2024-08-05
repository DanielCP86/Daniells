import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './App.styled';
import Header from 'components/Header/Header';
import AboutUs from 'components/AboutUs/AboutUs';
import Home from 'components/Home/Home';
import CandyBar from 'components/CandyBar/CandyBar';
import Products from 'components/Products/Products';
import ProductDetails from 'components/ProductDetails/ProductDetails';
import { ContainerWrapper } from 'styles/Container.styled';

export const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <ContainerWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:type" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/candy-bar" element={<CandyBar />} />
          {/* <Route path="/fillings" element={<Fillings />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </ContainerWrapper>
    </Router>
  );
};

export default App;
