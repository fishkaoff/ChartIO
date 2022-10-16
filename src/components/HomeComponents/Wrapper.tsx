import React from 'react'
import {useState} from 'react'
import Card from './Card'

const Wrapper = () => {

    const [formuls, setFromula] = useState([
        {id:1, name: "X=Xo+Vt", page: "/1"},
        {id:2, name: "V=at", page: "/2"},
        {id:3, name: "V=Vo+at", page: "/3"},
    ])

  return (
    <div className='container items-center'>
        <div className='title m-auto mt-28' id='title'>
            <h1 className='text-center'>Новый подход к построению графиков</h1>
        </div>
        <div className='flex m-auto cards-wrapper'>
            {formuls.map((formula) => 
                <Card formula={formula} key={formula.id}/>
            )}
        </div>
    </div>
  )
}

export default Wrapper