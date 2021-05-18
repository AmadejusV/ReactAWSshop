import Navbar from "./nav-bar/Navbar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./products/Products.jsx";
import Vision from "./vision/Vision.jsx";

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
        </Switch>
      </main>
    </Router>
  );
}

export default App;
