export default [
    {
      picHRef: require("../img/scaryMovie.jpg"),  
      picAlt : "Кино",
      title: "Поход в кино",
      typesOfTickets: ['adults','groups'],
      labels: [
        {text:"Доступны груповые билеты", id:1},
        {text:"Доступны взрослые билеты", id:2},
      ],
      id : 1,
      isActive: false
    },
    {
      picHRef: require("../img/aquapark.jpeg"),  
      picAlt : "Аквапарк",
      title: "Поход в аквапарк",
      typesOfTickets: ['adults','kids','benefits'],
      labels: [
        {text:"Доступны взрослые билеты", id:1},
        {text:"Доступны детские билеты", id:2},
        {text:"Доступны льготные билеты", id:3},
      ],
      id : 2,
      isActive: false
    },
    {
      picHRef: require("../img/safari.jpg"),  
      picAlt : "Сафари",
      title: "Поездка по сафари туру",
      typesOfTickets: ['adults','benefits'],
      labels: [
        {text:"Доступны взрослые билеты", id:1},
        {text:"Доступны льготные билеты", id:2},
      ],
      id : 3,
      isActive: false
    },
    {
      picHRef: require("../img/zoo.jpg"),  
      picAlt : "Зопарк",
      title: "Поход в зоопарк",
      typesOfTickets: ['adults','kids'],
      labels: [
        {text:"Доступны детские билеты", id:1},
        {text:"Доступны взрослые билеты", id:2},
      ],
      id : 4,
      isActive: false
    },
  ];