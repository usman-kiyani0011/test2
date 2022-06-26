import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddItems } from "./components/AddItem";
import ItemList from "./components/ItemList";
import { GlobalContext, GlobalProvider } from "./context/GlobalState";
import { useContext, useEffect, useState } from "react";
import { Button, Badge } from "react-bootstrap";

const App = () => {
  const { items, totalItems } = useContext(GlobalContext);

  useEffect(() => {}, []);

  const [state, setState] = useState({
    home: true,
    checkOut: false,
  });

  function homeHandler() {
    setState((preState) => {
      return { home: true, checkOut: false };
    });
  }
  function checkOutHandler() {
    setState((preState) => {
      return { home: false, checkOut: true };
    });
  }

  return (
    <GlobalProvider>
      <div className="App">
        <div className="container">
          <button className="btn btn-danger" onClick={homeHandler}>
            Home
          </button>

          <button className="btn btn-warning m-3" onClick={checkOutHandler}>
            Cart <Badge>{totalItems}</Badge>
          </button>
          {/* {state.about && } */}
          {state.home && <AddItems />}
          {state.checkOut && <ItemList />}
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
