import React from 'react'
import Formula from '../../data/formula-models'


interface FormulaProps {
    formula: Formula
}

const Wrapper = (props: FormulaProps) => {

    return (
        <div className='container items-center'>
            <div className='chart-title m-auto'>
                <div className=' m-auto'>
                    <h1 className='text-center'>{props.formula.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default Wrapper