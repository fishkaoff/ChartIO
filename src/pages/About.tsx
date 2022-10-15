import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <div className='background-img h-screen'>
      <Header />
      <div className="container">
        <div className='title m-auto mt-28'>
          <h1 className='text-center'>Наша цель помочь школьникам, которые плохо разбираются в построении графиков по физике.</h1>
        </div>
      </div>
    </div>
  )
}

export default About