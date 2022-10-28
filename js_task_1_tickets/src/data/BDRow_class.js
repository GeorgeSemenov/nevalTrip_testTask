import tot from './typesOfTickets.js'
let tota = Object.keys(tot);
class BDRow{
  constructor(ruleObj){
    //ruleObj = {BD, activeEvent}
    function returnStringWithZero(num){return `${num <10?"0":""}${num}`}
    let dn = new Date(Date.now());
    let year = dn.getFullYear()
    let month = returnStringWithZero(dn.getMonth() + 1);
    let day = returnStringWithZero(dn.getDate());
    let hour = returnStringWithZero(dn.getHours());
    let minute = returnStringWithZero(dn.getMinutes());
    let second = returnStringWithZero(dn.getSeconds());
    let id = ruleObj.BD.length
      ?  ruleObj.BD[ruleObj.BD.length - 1].id + 1
      :  1;
    this.id = id;
    this.event_id = ruleObj.activeEvent.id;
    this.event_date = ruleObj.activeEvent.eventDate;

    tota.forEach(tiType=>{
      let aetity = ruleObj.activeEvent.tickets
        .find(tic=>tic.type==tiType);

      this[`ticket_${tot[tiType]}_price`] = 
        aetity? aetity.price : 0;
      this[`ticket_${tot[tiType]}_quantity`] = 0;
    })

    this.barcode= 11111111 + ruleObj.BD.length;
    this.user_id= '0451';
    this.equal_price = 0;
    this.created= `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }

  calculateEqualPrice(){
    //prevval - неверно, оно высчитывается из предыдущих значений
    //в массив подставлять его нельзя
    this.equal_price = tota.reduce((prevVal, nextVal)=>{
      return prevVal 
        + this[`ticket_${tot[nextVal]}_price`] 
        * this[`ticket_${tot[nextVal]}_quantity`]
    },0)
  }
  setQuantity(ticketType,quantity){//устанавливает для определённого типа билетов нужное количество(quantity)
    this[`ticket_${ticketType}_quantity`] = quantity;
  }
  getQuantity(ticketType){//возвращает количество билетов определённого типа
    return this[`ticket_${ticketType}_quantity`];
  }
  getQuantityAllTickets(){//Возвращает количество всех купленных билетов
    let sum = 0;
    tota.forEach(tt=>{sum+=this[`ticket_${tt}_quantity`]})
    return sum;
  }
}



export default BDRow;