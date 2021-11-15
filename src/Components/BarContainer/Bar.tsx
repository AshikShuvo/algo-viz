import React,{FC} from 'react'

const Bar:FC <{width:number,height:number}> = ({width, height}) => {
    return (
       <div className={`h-full w-${width}`}>
           <div className="bg-green-500" style={{height:`${height}%` }}></div>
       </div>
    )
}

export default Bar
