import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Event from './components/Event/Event.jsx'

function App() {
  const [events,setEvents] = useState([
    {
      picHRef: require("./img/scaryMovie.jpg"),  
      picAlt : "Кино",
      title: "Поход в кино",
      labels: [
        {text:"Доступны груповые билеты", id:1},
        {text:"Доступны взрослые билеты", id:2},
      ]
    },
    {
      picHRef: require("./img/aquapark.jpeg"),  
      picAlt : "Аквапарк",
      title: "Поход в аквапарк",
      labels: [
        {text:"Доступны взрослые билеты", id:1},
        {text:"Доступны детские билеты", id:2},
        {text:"Доступны льготные билеты", id:3},
      ]
    },
    {
      picHRef: require("./img/safari.jpg"),  
      picAlt : "Сафари",
      title: "Поездка по сафари туру",
      labels: [
        {text:"Доступны взрослые билеты", id:1},
        {text:"Доступны льготные билеты", id:2},
      ]
    },
    {
      picHRef: require("./img/zoo.jpg"),  
      picAlt : "Зопарк",
      title: "Поход в зоопарк",
      labels: [
        {text:"Доступны детские билеты", id:1},
        {text:"Доступны взрослые билеты", id:2},
      ]
    },
  ])

  return (
    <div className="App">
      <div style={{display: "flex", flexWrap: "wrap", justifyContent:"center"}}>
        {events.map(event=>
          <Event
            picHRef= {event.picHRef}
            picAlt = {event.picAlt}
            title  = {event.title}
            labels = {event.labels}
            onClick = {(e)=>(e.target.className+=" active")}
          />      
        )}
      </div>
    </div>
  );
}

export default App;
