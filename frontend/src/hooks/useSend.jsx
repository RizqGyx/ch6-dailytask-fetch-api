import { useState, useEffect } from "react";
import axios from "axios";

const usePost = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sendData = async (url, method, body = null) => {
    const BASE_URL = "http://localhost:3000";
    let datas;

    const dummy = {
      id: "6e2bc663-5197-441a-957b-bc75e4a2da19",
      name: "Audi AG R8",
      rentPerDay: 500000,
      capacity: 4,
      size: "Medium",
      transmission: "Automatic",
      year: 2022,
      photo: "cars-Audi.min.jpg",
      createdByID: 11,
      lastUpdatedByID: 11,
      createdAt: "2023-05-15T08:30:00Z",
      updatedAt: "2023-05-15T09:45:00Z",
    };

    try {
      const response = await axios({
        method,
        url: `${BASE_URL}${url}`,
        data: body == null ? dummy : body,
      });
      datas = await response.data;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      return datas;
    }
  };
  return { loading, error, sendData };
};

export default usePost;
