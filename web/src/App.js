import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// STYLES | STATICs
import GlobalStyles from './styles/GlobalStyles';

// PAGEs
import Home from './pages/Home'
import Auth from './pages/Auth'
// COMPONENTs
import Footer from './components/Footer'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/authentication" element={<Auth />} />
    </Routes>

    <Footer />

    <GlobalStyles />
  </BrowserRouter>
)

export default App;
