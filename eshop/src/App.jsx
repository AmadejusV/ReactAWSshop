import Navbar from "./nav-bar/Navbar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./products/Products.jsx";
import Vision from "./vision/Vision.jsx";
import ProductPage from "./product-page/ProductPage.jsx";
import Error from "./error/Error.jsx";
import CartProvider from "./common/providers/CartProvider.jsx";
import Cart from "./cart/Cart.jsx";

function App() {
  return (
    <Router>
      <CartProvider>
        <header>
          <Navbar />
        </header>
        <main className="p-2" style={{ height: "calc(100vh - 44px)" }}>
          <Switch>
            <Route exact path={["/", "/products"]} component={Products} />
            <Route path="/products/:productId" component={ProductPage} />
            <Route exact path="/vision" component={Vision} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/error" component={Error} />
            <Route path="/" render={() => <div>404 bad url?</div>} />
          </Switch>
        </main>
      </CartProvider>
    </Router>
  );
}

export default App;
