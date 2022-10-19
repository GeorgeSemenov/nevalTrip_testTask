import React, {useState} from 'react';
import Counter from '../Counter/Counter.jsx'

function ControlPanel({...props}) {
  
  return(
    <div
      {...props}
    >
      <Counter
        title="количество детских билетов"
      />
    </div>
  )
}

export default ControlPanel;