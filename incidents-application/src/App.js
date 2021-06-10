import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Incidents from "./pages/Incidents";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Incidents" component={Incidents} exact />
        <Route path="*" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
