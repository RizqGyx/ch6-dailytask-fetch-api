import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import DetailCar from "./pages/DetailCar";
import useHttp from "./hooks/useHttp";
import axios from "axios";
import Login from "./pages/Login";

function App() {
  // const { data } = useHttp();
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [limitData, setLimitData] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/car?pageNum=${pageNum}&limitData=${limitData}`
        );
        const datas = await response.data.data;
        setData(datas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home fetch={data} />}></Route>
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/car/:id" element={<DetailCar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
