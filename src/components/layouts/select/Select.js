import React from 'react'
import { useSelect } from '../../../hooks/useSelect'

export const Select = ({props, label}) => {

    const [select, setSelect] = React.useState(props[0])
    
    return (
        
        <setion>
            <label>{label}</label>
            <select defaultValue="" onChange={({target})=>setSelect(target.value)} >
                {props.map((item, index)=>{
                    return <option 
                            value={item} 
                            key={index}>{item}
                        </option>
                })}
            </select>
        </setion>
            
    )
}
