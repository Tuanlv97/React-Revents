import React, {useState} from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import {Container} from "semantic-ui-react";

import { Route } from 'react-router-dom';
import HomePage from "../../features/home/HomePage";
import EventDetailPageEvent from "../../features/eventDetailedPage/EventDetailPageEvent";
import EventForm from "../../features/events/eventForm/EventForm";

 export default function App() {
     const [formOpen, setFormOpen] = useState(false);
     const [selectedEvent, setSelectedEvent] = useState(null);

     function handleSelectEvent(event) {
         setSelectedEvent(event);
         setFormOpen(true);
     }

     function handleCreatedFormOpen(){
         setSelectedEvent(null);
         setFormOpen(true);
     }

  return (
    <>
        <Route path='/' component={HomePage} />
        <Route path={'/(.+)'} render={() =>
            (
                <>
                    <NavBar setFormOpen={handleCreatedFormOpen} />
                    <Container className='main'>
                        <Route path='/events' component={EventDashboard} />
                        <Route path='/events:id' component={EventDetailPageEvent} />
                        <Route path='/createEvent' component={EventForm} />
                    </Container>
                </>
            )} />


    </>
  );
}
