import React, {useState} from 'react';

function Counter({title,typeOfTickets, defaultValue=0, 
  incrementSymbol="+",  decrementSymbol="-",
  setBDRow=(()=>{}), ...props}) {

  const [value,setValue] = useState(defaultValue)
  
  return(
    <div
      {...props}
      style={{display:"inline-block"}}
    >
      <span>
        {title}
      </span>
      <div style={{display: "flex"}}>
        <button 
          type="button"
          onClick = {()=>{
            setValue(value+1);
            setBDRow();
          }}
        >
          {incrementSymbol}
        </button>
        <input 
          type="text"
          value={value}
          onClick = {(e)=>e.target.select()}
          onChange = {(e)=>{
            setValue(isFinite(e.target.value) && 
            e.target.value >= 0? e.target.value : 0)
            setBDRow();
          }}
        />
        <button 
          type="button"
          onClick = {()=>{
            setValue(value==0? 0: value-1);
            setBDRow()
          }}
        >
          {decrementSymbol}
        </button>
      </div>
    </div>
  )
}

export default Counter;