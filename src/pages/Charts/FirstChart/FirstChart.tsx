import React from 'react'
import Header from '../../../components/Header'
import ChartsWrapper from '../ChartsWrapper'
import AllFormuls from '../../../data/formuls'
import Input from '../../../components/FirstChart/FirstChartWrapper'


const FirstChart = () => {

  return (
    <div className='background-img'>
      <Header />
      <div className="container">
        <ChartsWrapper formula={AllFormuls[0]} />
        <Input />
      </div>
    </div>
  )
}

export default FirstChart