import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { EventsAndIncentives } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Main() {
  return(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route index element={<App/>}/>
          <Route path="/eventsandincentives" element={<EventsAndIncentives/>}/>
          
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
    
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

/*ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
