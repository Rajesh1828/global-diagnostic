// src/PageLoaderWrapper.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from  '../../components/Loader/Loader.jsx';
const PageLoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, [location]);

  return loading ? <Loader /> : children;
};

export default PageLoaderWrapper;
