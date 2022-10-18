card{
  figure__pic-container{
    img__pic<picRef, picAlt> 
    figcaption__pic-label<picLabel, picModificator>
  }   
  __text-container{
    p__travel-time<travelTime>  
    p__title<>
    ul__advantages[advantages]{
      li__advantage{
        p__advantage-text<text>
        ul__departure-time[departureTimes]{
          li__departure-time<departureTimes[i]>
        }
      }
    } 
    __bottom{
      __price-container{
        p__price<price>
        p__price-desc<priceDesc>
      }
      btn<text,modificator>
    }
  }
}


{
  picRef:"",
  picLabel: "",
  picAlt: "",
  picModificator:"",
  travelTime:"2 часа",
  title:"",
  advantages:[
    {text:"", departureTimes["12:00"]}
  ]
  price: "900 ₽",
  priceDesc: "1200 ₽ на причале",
  btn:{text:"Подробнее", modificator:""}
}