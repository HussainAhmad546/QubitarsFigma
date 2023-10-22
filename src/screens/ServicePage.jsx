import React from 'react'
import Services from '../components/ServicesPageComponents/Services'
import OurServices from '../components/ServicesPageComponents/OurServices'
import HowWeWork from '../components/AboutUsComponents/HowWeWork'
import OurFeatures from '../components/ServicesPageComponents/OurFeatures'
import OurPricing from '../components/ServicesPageComponents/OurPricing'
import GetInfo from '../components/AboutUsComponents/GetInfo'
import OurTeam from '../components/ServicesPageComponents/OurTeam'

const ServicePage = () => {
  return (
    <>
    <Services/>
    <OurServices/>
    <HowWeWork/>
    <OurFeatures/>
    <OurPricing/>
    <OurTeam/>
    <GetInfo/>
    </>
  )
}

export default ServicePage
