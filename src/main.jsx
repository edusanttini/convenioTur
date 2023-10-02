import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import {
  EventsAndIncentives,
  NatureTours,
  CulturalTours,
  TransferServices,
  Gastronomy,
  Hotels,
  Argentina,
  Brasil,
  Paraguay
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Main() {
  return(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route index element={<App/>}/>
          <Route path="/eventsandincentives" element={<EventsAndIncentives/>}/>
          <Route path="/naturetours" element={<NatureTours/>}/>
          <Route path="/culturaltours" element={<CulturalTours/>}/>
          <Route path="/transferservices" element={<TransferServices/>}/>
          <Route path="/gastronomy" element={<Gastronomy/>}/>
          <Route path="/hotels" element={<Hotels/>}/>
          <Route path="/arg" element={<Argentina/>}/>
          <Route path="/br" element={<Brasil/>}/>
          <Route path="/py" element={<Paraguay/>}/>
          <Route path="arg/:rideIndex" element={< Argentina />} />
          <Route path="br/:rideIndex" element={< Brasil />} />
          <Route path="py/:rideIndex" element={< Paraguay />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
