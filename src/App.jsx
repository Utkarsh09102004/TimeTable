import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import './App.css'
import Schedule from './pages/Schedule';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path ="/schedule/:sub" element = { <Schedule /> } />




          <Route path="*" element={<NotFound />} />
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
