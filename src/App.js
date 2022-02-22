import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Summoner from "./pages/Summoner";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summoner/:id" element={<Summoner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
