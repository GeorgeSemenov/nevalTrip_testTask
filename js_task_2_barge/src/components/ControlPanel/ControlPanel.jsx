import React, {useState} from 'react';
import Select from '../Select/Select.jsx'
import Input from '../Input/Input.jsx'
import cl from './ControlPanel.module.css'


function ControlPanel({children,...props}) {
  const [ticket,setTicket] = useState({})
  const [navigationOptions,setNavigationOptions] = useState([
    {value: "AB", name:"из A в B"},
    {value: "BA", name:"из B в A"},
    {value: "ABA", name:"из A в B и обратно в А"},
  ]);
  const [ABTimeOptions,setABTimeOptions] = useState([
    {value: "18:00AB", name:"18:00(из A в B)"},
    {value: "18:30AB", name:"18:30(из A в B)"},
    {value: "18:45AB", name:"18:45(из A в B)"},
    {value: "19:00AB", name:"19:00(из A в B)"},
    {value: "19:15AB", name:"19:15(из A в B)"},
    {value: "21:00AB", name:"21:00(из A в B)"},
  ]);
  const [BATimeOptions,setBATimeOptions] = useState([
    {value: "18:30BA", name:"18:30(из B в A)"},
    {value: "18:45BA", name:"18:45(из B в A)"},
    {value: "19:00BA", name:"19:00(из B в A)"},
    {value: "19:15BA", name:"19:15(из B в A)"},
    {value: "19:35BA", name:"19:35(из B в A)"},
    {value: "21:50BA", name:"21:50(из B в A)"},
    {value: "21:55BA", name:"21:55(из B в A)"},
  ]);
  return(
    <div
      className={cl.ControlPanel}
      {...props}
      style={{display: "flex", padding: "15px"}}
    >
      <div
        style={{backgroundColor: "Ivory", padding:"10px"}}
      >
        <p>Выберете направление</p>
        <Select
          defaultValue="Выберете направление"
          additionalFunction = {(val)=>setTicket({direction : val})}
          options={navigationOptions}
        />
      </div>
      <div
        style={{backgroundColor: "Lavender", padding:"10px", display: "flex", flexDirection: "column"}}
      >
        <p>Выберете время</p>
        {
          ticket.direction!='defaultValue' && ticket.direction
          ? (<Select
              defaultValue={`Выберете время отправления из ${ticket.direction[0]} в ${ticket.direction[1]}`}
              options={
                ticket.direction == "BA"
                ? BATimeOptions
                : ABTimeOptions
              }
              additionalFunction = {(time)=>{setTicket({[`time${ticket.direction}`]: time, ...ticket})}}
            />
            )
          :''
        }
        {  ticket.direction == "ABA"
          ? <Select
              style={{marginTop:"15px"}}
              disabled
              defaultValue={`Выберете время отправления из ${ticket.direction[1]} в ${ticket.direction[2]}`}
              additionalFunction={(time)=>{setTicket({timeBA: time},...ticket); console.log(JSON.stringify(ticket));}}
            />
          : ""
        }
      </div>
      <div
        style={{backgroundColor: "LavenderBlush", padding:"10px"}}
      >
        <p>Укажите количество билетов</p>
        <Input/>
      </div>
    </div>
  )
}

export default ControlPanel;