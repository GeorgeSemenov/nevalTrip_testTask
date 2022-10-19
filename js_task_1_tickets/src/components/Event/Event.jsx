import React, {useState} from 'react';
import cl from './Event.module.css'

function Event({isActive,picHRef, picAlt, title, 
  typesOfTickets,...props}) {
  let isClicked = false;
  let labels = typesOfTickets.map((type,index)=>{
    let text;
    switch(type){
      case 'adults':
        text="Доступны взрослые билеты";
        break;
      case 'kids':
        text = "Доступны детские билеты";
        break;
      case 'groups':
        text="Доступны групповые билеты";
        break;
      case 'benefits':
        text="Доступны льготные билеты";
        break;
    } 
    return{id:index, text: text}
  })
  return(
    <figure
      {...props}
      className = {cl.Event + " " + (isActive? cl.active : "")}
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