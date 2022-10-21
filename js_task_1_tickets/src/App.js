import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import eventsData from './data/eventsData.js'
import Event from './components/Event/Event.jsx'
import ControlPanel from './components/ControlPanel/ControlPanel.jsx'
import BDViewer from './components/BDViewer/BDViewer.jsx'

function App() {
  const [events,setEvents] = useState(eventsData)
  const [BD,setBD] = useState([])
  return (
    <div className="App" style={{padding: "0px 15px 350px"}}>
      <h1>Выберете событие</h1>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent:"center", marginBottom: "35px"}}>
        {events.map((event,index)=>
          <Event
            event = {event}
            key   = {event.id}

            onClick   = {()=>{
              setEvents(events.map((event,indexTwo)=>{
                event.isActive = index === indexTwo? true : false; 
                return event;
              }))
            }}
          />      
        )}
      </div>
      {
        events.find(event=>event.isActive) &&
          <ControlPanel
            activeEvent = {events.find(event=>event.isActive)}
            BD = {BD}
            setBD= {setBD}
          />
      }
      {
        BD.length
          ? <BDViewer
            style={{textAlign:"center", margin:"0 auto"}}
            BD = {BD}
          />
          : ''
      }
    </div>
  );
}

export default App;
