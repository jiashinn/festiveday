import { Route, Switch, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Rankings from "./pages/Rankings";
import { AnimatePresence } from "framer-motion";
import AboutMe from "./pages/AboutMe";

export default function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/rankings">
            <Rankings />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
