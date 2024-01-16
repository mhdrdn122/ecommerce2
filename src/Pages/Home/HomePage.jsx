import React from 'react'
import Banner from '../../Components/Home/Banner'
import HomeCategory from '../../Components/Home/HomeCategory'
import CategoryShowCase from '../../Components/Home/CategoryShowCase'
import Register from '../../Components/Home/Register'
import LocationSprade from '../../Components/Home/LocationSprade'
import AboutUs from '../../Components/Home/AboutUs'
import AppSection from '../../Components/Home/AppSection'
import Sponsor from '../../Components/Home/Sponsor'

const HomePage = () => {
  return (
    <div>
        <Banner />
        <HomeCategory />
        <CategoryShowCase />
        <Register />
        <LocationSprade />
        <AboutUs />
        <AppSection />
        <Sponsor />
    </div>
  )
}

export default HomePage