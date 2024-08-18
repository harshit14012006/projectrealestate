import React from 'react'
import HomeSlider from '../components/HomeSlider.jsx'
import HomeAboutUS from '../components/HomeAboutUs.jsx';
import HomeProperties from '../components/HomeProperty.jsx';
import HomeChooseUs from '../components/HomeChooseUs.jsx';
function Home() {
  return (
    <div>
        <HomeSlider/>
        <HomeAboutUS/>
        <HomeProperties/>
        <HomeChooseUs/>
    </div>
  )
}

export default Home