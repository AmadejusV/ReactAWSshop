
import Navbar from "./nav-bar/Navbar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./products/Products.jsx";
import Vision from "./vision/Vision.jsx";

import ProductPage from "./product-page/ProductPage.jsx";


function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main className="p-2">
        <Switch>

          <Route exact path="/vision">
            <Vision />
          </Route>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductPage />
          </Route>
          <Route path="/" render={() => <div>404 bad url?</div>} />
        </Switch>
      </main>
    </Router>

  );
}

export default App;
