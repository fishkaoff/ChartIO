import React from 'react'
import { useState } from 'react'
import { VictoryLine, VictoryChart, VictoryLabel, Background } from 'victory';



const SecondChartWrapper = () => {

  const [a, setA] = useState("")

  const [data, setData] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ])

  function groupData() {
    let Data = [
      { x: 0, y: 0},
      { x: 1, y: Number(a)}
    ]

    setData(Data)
  }

  return (
    <div className='m-auto'>
      <div className='m-auto flex w-96'>
        <div className='flex pr-10 m-auto'>
          <h1 className='comp'>a=</h1>
          <div className='mt-5 ml-4'>
            <input
              type="text"
              className='bg-gray-500 outline-none rounded-xl h-14 w-20 text-gray-50 text-2xl bottom-0 text-center'
              onChange={e => {
                setA(e.target.value)
              }}
              value={a}
            />
          </div>
        </div>
      </div>

      <div className='m-auto mt-8 w-48'>
        <button className='build-btn cursor-pointer m-auto' onClick={groupData}>построить</button>
      </div>
      <div className='chart-bg mt-4 m-auto'>
        <VictoryChart 
          height={500}
          width={650}
          domain={[-5, 5]}
          backgroundComponent={<Background y={20} height={100} />}>

          <VictoryLine
            style={{
              data: { stroke: "#c43a31" },
              parent: { border: "1px solid #FFFFFF" }
            }}
            data={data}
            labels={({ datum }) => datum.y}
            labelComponent={<VictoryLabel renderInPortal dy={-20} />}
          />
        </VictoryChart>
      </div>
    </div>
  )
}

export default SecondChartWrapper