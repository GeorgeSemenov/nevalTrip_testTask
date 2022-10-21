import React, {useState} from 'react';
import BDRow from '../../data/BDRow_class.js'

function Counter({ticket, activeEvent, setBD,BD,
  incrementSymbol="+",  decrementSymbol="-", ...props}) 
{

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
            let newRow = new BDRow({
              BD:BD,
              activeEvent: activeEvent,
              value: ticket.quantity + 1,
              ticket : ticket
            })
            newRow.calculateEqualPrice();
            BD.push(newRow);
            console.log(JSON.stringify(BD[BD.length-1]));
            setBD([...BD]);
          }}
        >
          {incrementSymbol}
        </button>
        <span
          style={{margin:"0 15px"}}
        >
          {
            // !BD.length 
            // ?  BD.length
            // :  BD.filter(row=>{
            //      row.tickets.find(ticket=>) 
            //    }).length
          }
        </span>
        <button 
          type="button"
          onClick = {()=>{
            //проверь, чтобы объекты с таким типом существовали
            //т.е. их quantity >0, тогда найти index строки и удалить её
            //в противном случае ничего не делай
            // ~BD.findLastIndex(row=>row.tickets.findIndex())
            // BD.findLast(row=>)
            setBD()
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

// function getBDRow(ruleObj){
//   // Возвращяет строку(String) для BD
//   //ruleObj = {BD, activeEvent, value, ticket}
//   function returnStringWithZero(num){
//     return `${num <10?"0":""}${num}`
//   }
  
//   let dn = new Date(Date.now());
//   let year = dn.getFullYear()
//   let month = returnStringWithZero(dn.getMonth() + 1);
//   let day = returnStringWithZero(dn.getDate());
//   let hour = returnStringWithZero(dn.getHours());
//   let minute = returnStringWithZero(dn.getMinutes());
//   let second = returnStringWithZero(dn.getSeconds());
//   let id = ruleObj.BD.length
//     ?  ruleObj.BD[ruleObj.BD.length - 1].id + 1
//     :  1;
//   let row = {
//     id: id,
//     event_id : ruleObj.activeEvent.id,
//     event_date : ruleObj.activeEvent.eventDate,

//     barcode: 11111111 + ruleObj.BD.length,
//     user_id: '0451',
//     equal_price : ruleObj.ticket.price,
//     created: `${year}-${month}-${day} ${hour}:${minute}:${second}`
//   }
//   row['ticket_'+ ruleObj.ticket.type + '_price'] = ruleObj.ticket.price;
//   row[`ticket_${ruleObj.ticket.type}_quantity`] = ruleObj.value;
//   return row
// }