import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Discography from './components/Discography'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <Discography />
      </div>
      <Footer />
    </>
  )
}

export default App
