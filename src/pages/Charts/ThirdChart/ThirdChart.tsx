import React from 'react'
import Header from '../../../components/Header'
import ChartsWrapper from '../ChartsWrapper'
import AllFormuls from '../../../data/formuls'
import ThirdChartWrapper from './ThirdChartWrapper'

const ThirdChart = () => {
  return (
    <div className='background-img'>
      <Header />
      <div className="container">
        <ChartsWrapper formula={AllFormuls[2]} />
        <ThirdChartWrapper />
      </div>
    </div>
  )
}

export default ThirdChart