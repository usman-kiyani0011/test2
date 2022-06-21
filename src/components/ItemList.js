import React, { useContext, useState } from "react";

import { GlobalContext } from "../context/GlobalState";
import { Table, Button, Dropdown } from "react-bootstrap";

const ItemList = () => {
  const { items, removeItem } = useContext(GlobalContext);

  const [confirmItems, setConfrimItems] = useState([]);
  const [count, setCount] = useState(null);

  function add(id) {
    setConfrimItems((prev) => {
      const find = items.find((item) => {
        if (id === item.id) return item;
      });
      return [...prev];
    });
  }

  function subtract(id) {
    setCount((prevCount) => {
      return --prevCount;
    });
  }

  function addToCart(id) {
    console.log("clicked", id);
    const findItem = items.find((item) => {
      if (id === item.id) return item;
    });
    console.log("findItem", findItem);
    setConfrimItems((prev) => [...prev, findItem]);
    console.log("clicked item", confirmItems);
  }

  return (
    <>
      <div>
        {items.length > 4 ? (
          <div>
            <Table style={{ width: "50%" }}>
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
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price}</td>

                      <td>
                        <Dropdown>
                          <Dropdown.Toggle v>Confirm / Reject</Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item
                              onClick={() => {
                                addToCart(item.id);
                              }}
                            >
                              Confirm
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => {
                                removeItem(item.id);
                              }}
                            >
                              Reject
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
            </Table>
          </div>
        ) : (
          <p className="text-center bg-gray-100 text-gray-500 py-5">
            Please add minimum 5 items
          </p>
        )}
      </div>
      <div>
        <h1>Confirm items</h1>
        {confirmItems.length > 0 ? (
          <>
            <Table style={{ width: "50%" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              {confirmItems.map((item) => (
                <>
                  <tbody>
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>
                        <button
                          onClick={() => {
                            subtract(item.id);
                          }}
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          onClick={() => {
                            add(item.id);
                          }}
                        >
                          +
                        </button>
                      </td>
                      <td>{item.price}</td>
                    </tr>
                  </tbody>
                </>
              ))}
            </Table>
            <div>Total Ptice: </div>
          </>
        ) : (
          <h1>no data</h1>
        )}
      </div>
    </>
  );
};

export default ItemList;
