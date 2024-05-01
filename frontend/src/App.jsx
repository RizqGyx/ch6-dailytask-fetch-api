import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import DetailRest from "./pages/DetailRest";
import useHttp from "./hooks/useHttp";

function App() {
  const { data } = useHttp();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home fetch={data} />}></Route>
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/car/:id" element={<DetailRest />} />
      </Routes>
    </>
  );
}

export default App;
