import logo from './logo.svg'
import './App.css'
import Footer from './components/footer-module/footer'
import Profile from './components/profile-module/profile.jsx'
import { useState } from 'react'

function App() {

  return(
    <div className="App">

      <Profile />
      <Footer />
    </div>
  )
}



export default App
