import { createContext, useEffect, useState } from "react";
import { url } from "../api/api";
import { getData } from "../services/apiRequests";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // This is where the state exists
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await getData(url);
    setData(response);
    console.log("data fetched in DataContext.jsx");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
