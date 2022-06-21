import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form, Button, Table } from "react-bootstrap";

export const AddItems = () => {
  const { items, addItem, removeItem } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  const onSubmit = (e) => {
    console.log("clicked");
    e.preventDefault();
    const newItem = {
      id: items.length + 1,
      name,
      quantity,
      price,
    };
    addItem(newItem);
  };
  console.log(items);

  return (
    <div className="w-full max-w-sm container mt-20 mx-auto">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <div className="w-full mb-5">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
              required
            ></Form.Control>
          </div>
          <div className="w-full mb-5">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              placeholder="Enter quantity"
              required
            ></Form.Control>
          </div>
          <div className="w-full mb-5">
            <Form.Label>Price</Form.Label>
            <Form.Control
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="Enter price"
              required
            ></Form.Control>
          </div>
        </Form.Group>
        <div>
          <Button type="submit" variant="success">
            Add Item
          </Button>
          <Button className="m-2">Cancel</Button>
        </div>
        <div className=" mt-4 text-gray-500"></div>
      </Form>
      <div>
        {items.length > 0 ? (
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              {items.map((item) => (
                <>
                  <tbody>
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>
                    </tr>
                  </tbody>
                </>
              ))}
            </Table>
          </div>
        ) : (
          <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
        )}
      </div>
    </div>
  );
};
