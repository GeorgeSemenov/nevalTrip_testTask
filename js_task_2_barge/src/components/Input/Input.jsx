import React, {useState} from 'react';

function Input({children,...props}) {
  const [value,setValue] = useState(0)
  return(
    <input
      {...props}
      value={value}
      onChange = {(e)=>{
        let val = e.target.value;
        if(isFinite(val)){setValue(e.target.value)}
        else{setValue(0)}
      }}
      onClick = {(e)=>(e.target.select())}
    />
  )
}

export default Input;