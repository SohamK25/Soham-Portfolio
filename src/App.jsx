import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster toastOptions={{
          style: {
            background: 'rgba(0, 0, 0, 0.6)', 
            color: '#fff',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px'
          },
        }} position="top-right" reverseOrder={false} />
      </BrowserRouter>
    </>
  )
}

export default App
