import React, {useState} from 'react';
import

function Event({picHRef, picAlt, title, labels,...props}) {
  
  return(
    <figure
      {...props}
    >
      <img 
        src={picHRef}
        alt="picName"
      />
      <figcaption>
        {title}
      </figcaption>
      <ul>
        {labels.map(label=>
          <li 
            className={"EventLabel " + label.modificator}
          >
          {label.text}
          </li>
        )}
      </ul>
    </figure>
  )
}

export default Event;