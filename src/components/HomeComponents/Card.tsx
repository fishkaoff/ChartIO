import React from 'react'
import Formula from '../../data/formula-models'
import {Link} from 'react-router-dom'

interface FormulaProps {
    formula: Formula
}


const Card = (props: FormulaProps) => {
  return (
    <div className="container">
        <div className='card-background rounded-3xl items-center '>
            <h1 className='card-title m-auto mt-14 text-center'>{props.formula.name}</h1>
            <div className='arrow m-auto relative z-0'>
                <Link to={props.formula.page} className='absolute z-10 w-full h-full'></Link>
            </div>
        </div>
    </div>
  )
}

export default Card 