import React, { useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Profile from "../components/Profile";

const Events = () => {
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosWithAuth().get("/api/events");
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    })();
  });
  return (
    <div>
      <h1>Events</h1>
      <Profile />
    </div>
  );
};

export default Events;
