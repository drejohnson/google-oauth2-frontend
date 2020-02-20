import React from "react";
import { Route } from "react-router-dom";
import googleLoginUrl from "./utils/google-oauth-url";
import Authenticate from "./routes/Authenticate";
import Events from "./routes/Events";

function App() {
  return (
    <div className="App">
      <a href={googleLoginUrl}>Login with Google</a>
      <Route path="/authenticate/google">
        <Authenticate />
      </Route>
      <Route path="/events">
        <Events />
      </Route>
    </div>
  );
}

export default App;
