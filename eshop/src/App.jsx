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
      <main className="p-2" style={{ height: "calc(100vh - 44px)" }}>
        <Switch>
          <Route exact path="/vision" component={Vision} />
          <Route exact path={["/", "/products"]} component={Products} />
          <Route path="/products/:productId" component={ProductPage} />
          <Route path="/" render={() => <div>404 bad url?</div>} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
