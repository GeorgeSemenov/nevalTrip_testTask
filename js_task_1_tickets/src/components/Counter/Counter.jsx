import React, {useState} from 'react';
import BDRow from '../../data/BDRow_class.js'

function Counter({ticket, activeEvent, setBD,BD, isBarcodeUnique,
  incrementSymbol="+",  decrementSymbol="-", ...props}) 
{
  function isQuantityTypeForActiveEventMoreThanZero(row){
    return row[`ticket_${ticket.type}_quantity`] > 0
           && row.event_id === activeEvent.id
  }
  function getNewRow(){
    return new BDRow({
              BD:BD,
              activeEvent: activeEvent,
            })
  }

  return(
    <div
      {...props}
      style={{display:"inline-block"}}
    >
      <span>
        {ticket.type} tickets quantity
      </span>
      <div style={{display: "flex", justifyContent: "center"}}>
        <button 
          type="button"
          onClick = {()=>{
            let newRow;
            let lastIndex = -1;
            if(isBarcodeUnique){newRow = getNewRow();}
            else{
              lastIndex = BD.findLastIndex(bdRow=>
                bdRow.event_id === activeEvent.id)
              if(!~lastIndex){newRow = getNewRow();}//Если строки не существует, то её нужно создать
              else{newRow = BD[lastIndex]}
            }
            newRow.setQuantity(ticket.type,
              newRow.getQuantity(ticket.type) + 1)
            newRow.calculateEqualPrice();
            if(~lastIndex){BD[lastIndex]=newRow}
            else{BD.push(newRow)};
            setBD([...BD]);
          }}
        >
          {incrementSymbol}
        </button>
        <span
          style={{margin:"0 15px"}}
        >
          {
            BD.filter(bdRow=>
              isQuantityTypeForActiveEventMoreThanZero(bdRow)
            ).length
          }
        </span>
        <button 
          type="button"
          onClick = {()=>{
            let lastIndex = BD.findLastIndex(bdRow=>
              isQuantityTypeForActiveEventMoreThanZero(bdRow))
            if(~lastIndex){
              BD.splice(lastIndex,1)
              setBD([...BD])
            }
          }}
        >
          {decrementSymbol}
        </button>
      </div>
      <span>{ticket.price} ₽</span>
    </div>
  )
}

export default Counter;