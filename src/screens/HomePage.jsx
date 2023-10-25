import React from 'react'
import FeatureCategories from './../components/HomePageComponents/FeatureCategories'
import Testimonials from '../components/HomePageComponents/Testimonials'
import Slider from '../components/HomePageComponents/Slider'
import SalesCard from '../components/HomePageComponents/SalesCard'
import Products from '../components/HomePageComponents/Products'
import SingleProductPage from './SingleProductPage'


const HomePage = () => {
  return (
   <>
   <Slider />
   <SalesCard />
   <Products />
   <FeatureCategories />
   <Testimonials />
   <SingleProductPage/>
   </>
  )
}

export default HomePage
