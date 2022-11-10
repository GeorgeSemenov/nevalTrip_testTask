import React, {useState} from 'react';

function Select({children,options=[],additionalFunction=()=>{}
  ,defaultValue="empty defaultValue",...props}) {
  const [value,setValue] = useState(defaultValue)
  return(
    <select
      value={value}
      {...props}
      onChange = {(e)=>{
        setValue(e.target.value);
        additionalFunction(e.target.value);
      }}
    >
      <option value='defaultValue'>{defaultValue}</option>
      {
        options.map(option=>
          <option key={option.value} value={option.value}>{option.name}</option>
          )
      }
    </select>
  )
}

export default Select;