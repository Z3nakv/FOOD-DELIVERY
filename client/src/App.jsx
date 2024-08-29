import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Cart from './pages/Cart/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';
import Footer from './components/Footer/Footer.jsx';
import LoginPopup from './components/LoginPopup/LoginPopup.jsx';
import Verify from './pages/Verify/Verify.jsx';
import MyOrders from './pages/MyOrders/MyOrders.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      { showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></> }
      <div className='app'>
        
        <Navbar setShowLogin={setShowLogin} />
        <SearchBar />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/order' element={ <PlaceOrder /> } />
          <Route path='/verify' element={ <Verify /> } />
          <Route path='/myorders' element={ <MyOrders /> } />
        </Routes>

      </div>

        <Footer />

    </>
  )
}

export default App
