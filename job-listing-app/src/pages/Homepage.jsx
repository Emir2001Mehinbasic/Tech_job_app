import React from 'react'
import Hero from '../components/Hero'
import Homecard from '../components/Homecard'
import Joblisting from '../components/Joblistings'
import ViewAllJobs from '../components/ViewAllJobs'

const Homepage = () => {
  return (
    <>
    <Hero />
    <Homecard />
    <Joblisting isHome={true}/>
    <ViewAllJobs />

    </>
    
  )
}

export default Homepage