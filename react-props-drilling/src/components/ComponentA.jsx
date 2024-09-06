import useData from "../contexts/useData";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const { data } = useData();

  return (
    <div>
      <h1>Component A</h1>
      <div>
        <h2>{data?.name}</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {data?.orders?.map((order, orderIndex) => {
            return (
              <div key={orderIndex}>
                <p>Order ID: {order.orderId}</p>
                <p>Product: {order.product}</p>
                <p style={{ backgroundColor: "red" }}>
                  Quantity: {order.quantity}
                </p>
                <p>Price: {order.price}</p>
              </div>
            );
          })}
        </div>
      </div>
      <ComponentB data={data} />
    </div>
  );
};

export default ComponentA;
