import React, {useState} from 'react';
import ticketTypesArray from '../../data/typesOfTickets.js'

function Counter({title,counterType, price, activeEvent,
  defaultValue=0, incrementSymbol="+",  decrementSymbol="-", 
  setBD,BD, ...props}) {

  const [value,setValue] = useState(defaultValue)
  
  return(
    <div
      {...props}
      style={{display:"inline-block"}}
    >
      <span>
        {title}
      </span>
      <div style={{display: "flex"}}>
        <button 
          type="button"
          onClick = {()=>{
            setValue(value+1);
            BD.push(getBDRow(BD,activeEvent,value,counterType));
            setBD([...BD]);
          }}
        >
          {incrementSymbol}
        </button>
        <input 
          type="text"
          value={value}
          onClick = {(e)=>e.target.select()}
          onChange = {(e)=>{
            setValue(isFinite(e.target.value) && 
            e.target.value >= 0? e.target.value : 0)
            setBD();
          }}
        />
        <button 
          type="button"
          onClick = {()=>{
            setValue(value==0? 0: value-1);
            setBD()
          }}
        >
          {decrementSymbol}
        </button>
      </div>
      <span>{price} ₽</span>
    </div>
  )
}

export default Counter;

function getBDRow(BD,activeEvent,value,counterType){
  // Возвращяет строку(String) для BD
  function returnStringWithZero(num){
    return `${num <10?"0":""}${num}`
  }
  function getTicketPrice(ticketType='adults'){
    let price = activeEvent.typesOfTickets.find(type=>type.name==ticketType).price;
    price = price? price: `-`;
    return price;
  }
  let dn = new Date(Date.now());
  let year = dn.getFullYear()
  let month = returnStringWithZero(dn.getMonth() + 1);
  let day = returnStringWithZero(dn.getDate());
  let hour = returnStringWithZero(dn.getHours());
  let minute = returnStringWithZero(dn.getMinutes());
  let second = returnStringWithZero(dn.getSeconds());
  
  return {
    id: BD.length,
    event_id : activeEvent.id,
    event_date : activeEvent.eventDate,
    ticket_adult_price : getTicketPrice('adults'),
    ticket_adult_quantity: 1,
    barcode: 11111111 + BD.length,
    user_id: '0451',
    equal_price : getTicketPrice(counterType),
    created: `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }
}w