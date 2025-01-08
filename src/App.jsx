import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import { useState } from "react";
import Description from "./components/Description";

function App() {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              showDescription={showDescription}
              setShowDescription={setShowDescription}
            />
          }
        />

        <Route path="description/:movie_id" element={<Description />} />
      </Routes>
    </>
  );
}

export default App;
