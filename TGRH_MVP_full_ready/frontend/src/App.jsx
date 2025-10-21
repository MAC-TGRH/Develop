import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import AdminContent from './pages/AdminContent'

export default function App(){
  return (
    <BrowserRouter>
      <nav style={{padding:10}}>
        <Link to="/">Home</Link>{" | "}
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<AdminContent />} />
      </Routes>
    </BrowserRouter>
  )
}
