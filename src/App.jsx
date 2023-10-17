import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Discography from './components/Discography'
import Footer from './components/Footer'
import NewsletterForm from './components/NewsletterForm'

function App() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <Discography />
      </div>
      {/* <NewsletterForm /> */}
      <Footer />
    </>
  )
}

export default App
