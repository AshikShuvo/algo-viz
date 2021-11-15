import React from 'react'
import Bar from './Bar'

const BarContainer = () => {
    return (
        <div className="border-solid border-4 border-light-blue-500 h-full">
           <div className="flex justify-around h-full">
            <Bar width={10} height={70}/>
            <Bar width={10} height={30}/>
            <Bar width={10} height={80}/>
            <Bar width={10} height={40}/>
            <Bar width={10} height={10}/>
            <Bar width={10} height={90}/>
            <Bar width={10} height={100}/>
            <Bar width={10} height={45}/>
           </div>
        </div>
    )
}

export default BarContainer
