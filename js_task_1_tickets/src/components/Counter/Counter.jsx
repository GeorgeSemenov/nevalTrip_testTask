import React, {useState} from 'react';

function Counter({title,typeOfTickets, price, activeEvent,
  defaultValue=0, incrementSymbol="+",  decrementSymbol="-", 
  setBD=(()=>{}),BD, ...props}) {

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
            let row = {
              id: BD.length + 1,
              event_id : activeEvent.id,
              event_date : activeEvent.eventDate,
              ticket_adult_price : activeEvent.
                typesOfTickets.find(type=>type.name=='adults').price,
              ticket_adult_quantity: 1,
              barcode: 11111111,
              user_id: '0451',
              equal_price : 700,
              created: Date.now()
            }
            setBD([row]);
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