import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import { useState } from "react";
import Description from "./components/Description";

function App() {
  const [showDescription, setShowDescription] = useState(true);
  console.log(showDescription);

  return (
    <>
      {showDescription ? (
        <Description
          showDescription={showDescription}
          setShowDescription={setShowDescription}
        />
      ) : (
        <></>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 
        <Route
          path="/description"
          element={
            <Description
              showdescription={showdescription}
              setShowDescription={setShowDescription}
            />
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
