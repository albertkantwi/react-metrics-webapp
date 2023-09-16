import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CountryDetail from './components/Country';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countrydetail/:name" element={<CountryDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
