import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import { useState } from "react";
import Description from "./components/Description";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="description/:movie_id" element={<Description />} />
      </Routes>
    </>
  );
}

export default App;
