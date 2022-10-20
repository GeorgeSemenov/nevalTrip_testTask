import React, {useState} from 'react';
import Counter from '../Counter/Counter.jsx'
import cl from './ControlPanel.module.css'

function ControlPanel({activeEvent, setBD,BD,...props}) {
  let counters = activeEvent.typesOfTickets.map((type,index)=>{
    let title;
    switch (type.name) {
      case "adults":
        title = "количество взрослых билетов";
        break;
      case "kids":
        title = "количество детских билетов";
        break;
      case "groups":
        title = "количество групповых билетов";
        break;
      case "benefits":
        title = "количество льготных билетов";
        break;
      default :
        title = `${type.name} tickets`
    }
    return {title: title, id: index, type: type.name, price: type.price}
  })
  return(
    <div
      {...props}
      className={cl.ControlPanel}
    >
      <h2>Выберете количество билетов и их тип</h2>
      <h3> Вы выбрали {activeEvent.title}</h3>
      {counters.map((counter,index)=>
        <Counter 
          key = {activeEvent.id + "." + index}
          title={counter.title}
          className = {cl.Counter}
          typeOfTickets= {counter.type}
          price = {counter.price}
          setBD = {setBD}
          BD = {BD}
          activeEvent = {activeEvent}
        />)}
      <h3>Стоимость всех билетов составляет</h3>
    </div>
  )
}

export default ControlPanel;