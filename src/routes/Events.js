import React, { useState ,useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Profile from "../components/Profile";

const Events = () => {
  const [events , setEvents] = useState([])
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosWithAuth().get("/api/events");
        console.log('events',data.events.items);
        setEvents(data.events.items)
      } catch (error) {
        console.error(error);
      }
    })();
  },[]);

  return (
    <div>
      <Profile />
      <h1>Events</h1>
      <div>
        {events && events.map(e => (
          <div key={e.id}>
            {e.summary}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
