import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Fetcher = ({ url, render }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return <>{render({ data, loading, error })}</>;
};

export default Fetcher;
