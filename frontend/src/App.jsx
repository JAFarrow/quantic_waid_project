import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from "./components/header"
import Home from "./pages/home"
import Menu from "./pages/menu";
import AboutUs from "./pages/about";

function App() {
  return (
    <Router >
      <main style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', maxWidth: '100vw' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
