import React from 'react'
import Herosection from './components/Herosection/hero'
import Features from './components/Features/features'
import Restaurants from './components/Restaurants/restaurants'
import Footer from './components/Footer/footer'

import './App.css';
import './components/FontAwesome'


function App() {
  return (
    <div className="body">
      <Herosection />
      <Features />
      <Restaurants />
      <Footer />
    </div>
  )
}

export default App;
