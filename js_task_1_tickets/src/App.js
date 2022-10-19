import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import eventsData from './data/eventsData.js'
import Event from './components/Event/Event.jsx'
import ControlPanel from './components/ControlPanel/ControlPanel.jsx'
import BDViewer from './components/BDViewer/BDViewer.jsx'

function App() {
  const [events,setEvents] = useState(eventsData)

  return (
    <div className="App">
      <h1>Выберете событие</h1>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent:"center"}}>
        {events.map((event,index)=>
          <Event
            key              = {event.id}
            picHRef          = {event.picHRef}
            picAlt           = {event.picAlt}
            title            = {event.title}
            typesOfTickets   = {event.typesOfTickets}
            isActive         = {event.isActive}

            onClick   = {()=>{
              //всё переделай через setState
              setEvents(events.map((event,indexTwo)=>{
                event.isActive = index === indexTwo? true : false; 
                return event;
              }))
            }}
          />      
        )}
      </div>
      <h2>Выберете количество билетов и их тип</h2>
      <ControlPanel/>
    </div>
  );
}

export default App;
