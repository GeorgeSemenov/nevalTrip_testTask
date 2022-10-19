import React, {useState} from 'react';
import Counter from '../Counter/Counter.jsx'
import cl from './ControlPanel.module.css'

function ControlPanel({activeEvent, setBD,...props}) {
  const [BDRow,setBDRow] = useState({})
  let counters = activeEvent.typesOfTickets.map((type,index)=>{
    let title;
    switch (type) {
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
        title = `${type} tickets`
    }
    return {title: title, id: index, type: type}
  })
  return(
    <div
      {...props}
      className={cl.ControlPanel}
    >
      <h2>Выберете количество билетов и их тип</h2>
      <h3> Вы выбрали {activeEvent.title}</h3>
      {counters.map(counter=>
        <Counter 
          title={counter.title}
          className = {cl.Counter}
          typeOfTickets= {counter.type}
          setBDRow = {setBDRow}
        />)}
    </div>
  )
}

export default ControlPanel;