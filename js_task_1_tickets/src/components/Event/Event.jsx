import React, {useState} from 'react';
import cl from './Event.module.css'

function Event({event,...props}) {
  let isClicked = false;
  let labels = event.tickets.map((ticket,index)=>{
    return{id:index, text: `${ticket.type} tickets available`}
  })
  return(
    <figure
      {...props}
      className = {cl.Event + " " + (event.isActive? cl.active : "")}
    >
      <img 
        src= {event.picHRef}
        alt= {event.picAlt}
        className={cl.EventPic}
      />
      <figcaption>
        {event.title}
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