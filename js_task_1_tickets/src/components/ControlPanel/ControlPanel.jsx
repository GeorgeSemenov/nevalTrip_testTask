import React, {useState} from 'react';
import Counter from '../Counter/Counter.jsx'
import cl from './ControlPanel.module.css'

function ControlPanel({activeEvent, setBD,BD,...props}) {

  const [isBarcodeUnique,setIsBarcodeUnique] = useState(true);
  return(
    <div
      {...props}
      className={cl.ControlPanel}
    >
      <h2>Выберете количество билетов и их тип</h2>
      <h3> Вы выбрали пункт "{activeEvent.title.toLowerCase()}"</h3>
      {activeEvent.tickets.map((ticket,index)=>
        <Counter 
          key = {activeEvent.id + "." + index}
          className = {cl.Counter}
          ticket= {ticket}
          setBD = {setBD}
          BD = {BD}
          activeEvent = {activeEvent}
          isBarcodeUnique = {isBarcodeUnique}
        />)}
      <div style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
        <input 
          id="isBarcodeUnique" 
          type="checkbox"
          defaultChecked = {isBarcodeUnique}
          style = {{display: "inline-block", height:"50px", width:"50px"}}
          onChange = {(e)=>setIsBarcodeUnique(e.target.checked)}
        /> 
        <label
          htmlFor="isBarcodeUnique"
          style={{fontSize:"30px"}}
        >Barcode уникален для каждого билета</label>
      </div>
      <h3>Стоимость всех билетов составляет</h3>
    </div>

  )
}

export default ControlPanel;