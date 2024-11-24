import React from 'react';

const Dropdown=({title,option,funct})=>{
    return(
        <>
        <div className="select">
            <select defaultValue="0" onChange={funct} name="format" id="format">
                <option value="0" disabled>
                    {title}
                </option>
                {option.map((option,index)=>(
                    <option key={index} value={option}>
                        {option.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
        </>
    )
}

export default Dropdown;