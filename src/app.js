import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
      </Routes>
      <Route path="/contact">
        <h1>Contacts</h1>
      </Route>
    </BrowserRouter>
  );
}

export default App;
