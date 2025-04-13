// import React from 'react'
import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import Header from "../../components/Header/Header"
import "./Home.css"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import { food_list } from "../../assets/assets"
import AppDownload from "../../components/AppDownload/AppDownload"
import Footer from "../../components/Footer/Footer"
// import { useState } from "react"

const home = () => {
  const [category, setCategory] = useState('All');
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
      {/* <Footer /> */}
      
    </div>
  )
}

export default home;