import React, {useState} from 'react';
import Counter from '../Counter/Counter.jsx'
import cl from './ControlPanel.module.css'

function ControlPanel({activeEvent, setBD,BD,...props}) {

  return(
    <div
      {...props}
      className={cl.ControlPanel}
    >
      <h2>Выберете количество билетов и их тип</h2>
      <h3> Вы выбрали {activeEvent.title}</h3>
      {activeEvent.tickets.map((ticket,index)=>
        <Counter 
          key = {activeEvent.id + "." + index}
          className = {cl.Counter}
          ticket= {ticket}
          setBD = {setBD}
          BD = {BD}
          activeEvent = {activeEvent}
        />)}
      <h3>Стоимость всех билетов составляет</h3>
    </div>
  )
}

export default ControlPanel;