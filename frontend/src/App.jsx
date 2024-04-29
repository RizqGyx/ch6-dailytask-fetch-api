import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import DetailRest from "./pages/DetailRest";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/car/:id" element={<DetailRest />} />
      </Routes>
    </>
  );
}

export default App;
