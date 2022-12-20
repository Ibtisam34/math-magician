import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Navbar from './components/Navbar';
import Quote from './components/pages/Quote';
import Home from './components/pages/home';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
      </Routes>
    </>
  );
}
