import React from 'react'
import Header from './components/header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Signin from './pages/Signin'
import Cart from './pages/Cart'
import { ToastContainer } from 'react-toastify'
import ServicesDetails from './pages/servicesDetails'


const App = () => {
  return (
    <>
    <Header/>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/About us' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/services/:id' element={<ServicesDetails />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/contact us' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/sign In' element={<Signin />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>

    <Footer />
    </>
  )
}

export default App
