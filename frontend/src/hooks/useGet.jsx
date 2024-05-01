import { useState, useEffect } from "react";
import axios from "axios";

const useGet = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url, method, body) => {
    const BASE_URL = "http://localhost:3000";
    let datas;

    try {
      const response = await axios.get(`${BASE_URL}${url}`);
      datas = await response.data;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setData(datas);
    }
  };
  return { data, loading, error, fetchData };
};

export default useGet;
