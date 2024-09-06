import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import useData from "../contexts/useData";

const ComponentC = () => {
  // const { data, setData } = props;
  const { data, setData } = useData();

  const [orders, setOrders] = useState(data?.orders);

  useEffect(() => {
    setOrders(data?.orders);
  }, [data]);

  useEffect(() => {});

  const handleChange = (orderIndex, field) => (event) => {
    const newOrders = [...orders];
    newOrders[orderIndex][field] = event.target.value;
    setOrders(newOrders);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/data`, {
        ...data,
        orders,
      });
      setOrders(response.data.orders);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Component C</h1>
      <div>
        <h2>{data?.name}</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {orders?.map((order, orderIndex) => (
            <div
              key={orderIndex}
              style={{ display: "flex", flexDirection: "column", margin: 10 }}
            >
              <TextField
                label="Order ID"
                value={order?.orderId}
                onChange={handleChange(orderIndex, "orderId")}
              />
              <TextField
                label="Product"
                value={order?.product}
                onChange={handleChange(orderIndex, "product")}
              />
              <TextField
                label="Quantity"
                value={order?.quantity}
                onChange={handleChange(orderIndex, "quantity")}
              />
              <TextField
                label="Price"
                value={order?.price}
                onChange={handleChange(orderIndex, "price")}
              />
            </div>
          ))}
        </div>
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default ComponentC;
