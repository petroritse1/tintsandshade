import React from 'react'
import {nanoid} from "nanoid";
import Colors from './Colors';

function ColorsList({color,input,copy}) {
    
    return (
        <div className='colors' style={{borderTop:`1px solid ${input}`}}>
            {color.map((item,index)=>{
                return(
                    <Colors key={nanoid()} color={item} index={index}  />
                    )
                    
            })}
        </div>
    )
}

export default ColorsList
