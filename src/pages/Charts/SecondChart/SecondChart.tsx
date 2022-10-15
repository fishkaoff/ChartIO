import React from 'react'
import Header from '../../../components/Header'
import ChartsWrapper from '../ChartsWrapper'
import AllFormuls from '../../../data/formuls'
import SecondChartWrapper from './SecondChartWrapper'

const SecondChart = () => {
  return (
    <div className='background-img'>
      <Header />
      <div className="container">
        <ChartsWrapper formula={AllFormuls[1]} />
        <SecondChartWrapper />
      </div>
    </div>
  )
}

export default SecondChart