// import React from 'react'
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home.jsx";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart";
import Placeorder from "./pages/placeorder/Placeorder";
import Navbar from "./components/Navbar/Navbar";

import StoreContextprovider from "./components/context/StoreContext.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx";
// import Placeorder from './pages/placeorder.jsx'
const App = () => {
  const [showLogin, setshowLogin] = useState(false);
  return (
    <>
    {
      showLogin?<LoginPopup setshowLogin={setshowLogin} /> : <></>
    }
      <div className="app">
        <Navbar setshowLogin={setshowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Placeorder" element={<Placeorder />} />

        </Routes>
        <Footer />

      </div>
    </>
  )
}

export default App