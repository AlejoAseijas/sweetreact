import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { CartContext } from "../src/context/cartContext";
function App() {
  return (
    <>
      <CartContext>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={ItemListContainer} />

            <Route
              path="/category/:idCategory"
              exact
              component={ItemListContainer}
            />

            <Route
              path="/detalle/:idProducto"
              exact
              component={ItemDetailContainer}
            />
            <Route path="/cart" exact component={Cart} />
          </Switch>
        </Router>
      </CartContext>
    </>
  );
}

export default App;
