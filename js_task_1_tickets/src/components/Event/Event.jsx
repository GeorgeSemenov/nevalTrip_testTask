import React, {useState} from 'react';
import cl from './Event.module.css'

function Event({picHRef, picAlt, title, labels,...props}) {
  
  return(
    <figure
      {...props}
      className = {cl.Event}
      onClick = {(e)=>(console.log(e.target.className))}
    >
      <img 
        src={picHRef}
        alt="picName"
        className={cl.EventPic}
      />
      <figcaption>
        {title}
      </figcaption>
      <ul className={cl.EventListLabels} >
        {labels.map(label=>
          <li 
            key = {label.id}
            className={cl.EventLabel}
            style={{width: "100%", backgroundColor: "greenyellow", marginBottom: "5px"}}
          >
          {label.text}
          </li>
        )}
      </ul>
    </figure>
  )
}

export default Event;