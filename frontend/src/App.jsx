import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header"
import Home from "./pages/home"
import Menu from "./pages/menu";
import AboutUs from "./pages/about";
import Gallery from "./pages/gallery";
import Reservations from "./pages/reservations";

function App() {
  return (
    <Router >
      <Header />
      <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', maxWidth: '100vw' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/reservations' element={<Reservations />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
