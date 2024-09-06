import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { url } from "../api/api";
import ComponentA from "../components/ComponentA";
import { getData } from "../services/apiRequests";
import useData from "../contexts/useData";

// const data = await getData(url);

// this is outside the component
const Home = () => {
  // const [data, setData] = useState(null);
  const { data } = useData();

  console.log("Data: ", data);
  // This is inside the component

  return (
    <div>
      <Typography variant="h6" component="h2">
        Home
      </Typography>
      <ComponentA />
    </div>
  );
};

// This is outside the component

export default Home;
