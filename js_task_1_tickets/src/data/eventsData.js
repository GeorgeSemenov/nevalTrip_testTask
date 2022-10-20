export default [
    {
      picHRef: require("../img/scaryMovie.jpg"),  
      picAlt : "Кино",
      title: "Поход в кино",
      eventId: "003",
      eventDate: "2021-08-21 13:00:00",
      typesOfTickets: [
        {name: 'adults', price: 700},
        {name: 'groups', price: 1500}
      ],
      id : 1,
      isActive: false
    },
    {
      picHRef: require("../img/aquapark.jpeg"),  
      picAlt : "Аквапарк",
      title: "Поход в аквапарк",
      eventId: "004",
      eventDate: "2021-09-22 12:00:00",
      typesOfTickets: [
        {name: 'adults', price: 800},
        {name:'kids', price: 500},
        {name:'benefits', price: 450},
      ],
      id : 2,
      isActive: false
    },
    {
      picHRef: require("../img/safari.jpg"),  
      picAlt : "Сафари",
      title: "Поездка по сафари туру",
      eventId: "005",
      eventDate: "2022-09-22 11:00:00",
      typesOfTickets: [
        {name: 'adults', price: 1000},
        {name: 'benefits', price: 750}
      ],
      id : 3,
      isActive: false
    },
    {
      picHRef: require("../img/zoo.jpg"),  
      picAlt : "Зопарк",
      title: "Поход в зоопарк",
      eventId: "006",
      eventDate: "2022-10-22 13:00:00",
      typesOfTickets: [
        {name: 'adults', price: 600},
        {name: 'kids', price: 300}
      ],
      id : 4,
      isActive: false
    },
  ];