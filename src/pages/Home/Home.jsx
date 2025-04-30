import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Join from '../Join/Join'
import Invest from '../Invest/Invest'
import Started from '../Started/Started'
import Readmore from '../Readmore/Readmore'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Join/>
        <Invest/>
        <Started/>
        <Readmore/>
    </div>
  )
}

export default Home