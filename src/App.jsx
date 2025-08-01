import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import ContactFormPage from './pages/ContactFormPage'
import AboutUsPage from './pages/AboutUsPage'
import EleconAerotechPage from './pages/EleconAerotechPage'
import { SmoothScroll } from './components/animations'

function App() {
  return (
    <SmoothScroll>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactFormPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/elecon-aerotech" element={<EleconAerotechPage />} />
        </Routes>
        <Footer />
      </div>
    </SmoothScroll>
  )
}

export default App
