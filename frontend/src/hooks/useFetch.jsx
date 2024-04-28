import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url = "https://fakestoreapi.com/products") => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(url);
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, setData, fetchData };
};

export default useFetch;
