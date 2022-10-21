import tot from './typesOfTickets.js'
let tota = Object.keys(tot);
class BDRow{
  constructor(ruleObj){
    //ruleObj = {BD, activeEvent, value, ticket}
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

    tota.forEach(ticket=>{
      this[`ticket_${tot[ticket]}_price`] = 0;
      this[`ticket_${tot[ticket]}_quantity`] = 0;
    })

    this.barcode= 11111111 + ruleObj.BD.length;
    this.user_id= '0451';
    this.equal_price = 0;
    this.created= `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }

  calculateEqualPrice(){
    //prevval - неверно, оно высчитывается из предыдущих значений
    //в массив подставлять его нельзя
    this.equal_price= tota.slice(1).reduce((prevVal, nextVal)=>{
      console.log(`prevVal = ${prevVal} --- nextVal = ${nextVal}`);
      return this[`ticket_${tot[prevVal]}_price`]
        * this[`ticket_${tot[prevVal]}_quantity`] 
        + this[`ticket_${tot[nextVal]}_price`] 
        * this[`ticket_${tot[nextVal]}_quantity`]
    },tota[0])
  }
}



export default BDRow;