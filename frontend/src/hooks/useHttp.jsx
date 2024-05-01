import { useState, useEffect } from "react";
import axios from "axios";

const useHttp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (
    url = "https://fakestoreapi.com/products",
    method = "GET",
    body = null
  ) => {
    const BASE_URL = "http://localhost:3000";

    try {
      let response;
      if (method === "GET") {
        response = await axios.get(url);
      } else if (method === "POST") {
        response = await axios.post(url, body);
      } else if (method === "PUT") {
        response = await axios.put(url, body);
      } else if (method === "DELETE") {
        response = await axios.delete(url);
      }
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return { data, loading, error, fetchData };
};

export default useHttp;
