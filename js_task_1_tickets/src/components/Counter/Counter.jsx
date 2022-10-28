import React, {useState} from 'react';
import BDRow from '../../data/BDRow_class.js'

function Counter({ticket, activeEvent, setBD,BD, isBarcodeUnique,
  incrementSymbol="+",  decrementSymbol="-", ...props}) 
{
  function getNewRow(){
    return new BDRow({
              BD:BD,
              activeEvent: activeEvent,
            })
  }

  function plusClickFunc(){
    let newRow;
    let rowIndex = -1;
    if(isBarcodeUnique){newRow = getNewRow();}
    else{
      rowIndex = BD.findLastIndex(dbRow=>
        dbRow.event_id === activeEvent.id)
      if(!~rowIndex){newRow = getNewRow();}//Если строки не существует, то её нужно создать
      else{newRow = BD[rowIndex]}
    }
    newRow.setQuantity(ticket.type,
      newRow.getQuantity(ticket.type) + 1)
    newRow.calculateEqualPrice();
    if(~rowIndex){BD[rowIndex]=newRow}
    else{BD.push(newRow)};
    setBD([...BD]);
  }

  function minusClickFunc(){
    let rowIndex = BD.findLastIndex(dbRow=>
      dbRow.event_id == activeEvent.id)
    let dataBaseRow;
    console.log(`rowIndex = ${rowIndex}`);
    if(~rowIndex){//Проверяем созданна ли строка с event_id
      dataBaseRow = BD[rowIndex];
      if(dataBaseRow.getQuantity(ticket.type) > 0){//Есть ли у данной строки билеты данного типа
        dataBaseRow.setQuantity( ticket.type, 
          dataBaseRow.getQuantity(ticket.type) - 1)
        if(dataBaseRow.getQuantityAllTickets() != 0){//Осталось ли у строки билеты какого-либо типа
          dataBaseRow.calculateEqualPrice();
          BD[rowIndex] = dataBaseRow;
        }else{BD.splice(rowIndex, 1)}
        setBD([...BD])
      }else{return ;}
    }
  }

  function calculateAllTicketsCertainType(){
    let rowsWithCertainEventId = BD.filter(bdRow=>bdRow.event_id === activeEvent.id)
    return rowsWithCertainEventId.length ? rowsWithCertainEventId.reduce((prv,nxt)=>
          {return (isFinite(prv)? prv : prv.getQuantity(ticket.type) )
             + nxt.getQuantity(ticket.type)}
        ,0)
      : 0
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
        {/*кнопка прибавления*/}
        <button 
          type="button"
          onClick = {plusClickFunc}
        >
          {incrementSymbol}
        </button>
        {/*Отображение числа*/}
        <span
          style={{margin:"0 15px"}}
        >
          {calculateAllTicketsCertainType()}
        </span>
        {/*кнопка вычитания*/}
        <button 
          type="button"
          onClick = {minusClickFunc}
        >
          {decrementSymbol}
        </button>
      </div>
      <span>{ticket.price} ₽</span>
    </div>
  )
}

export default Counter;