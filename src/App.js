import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyPod from "./mypod/Index.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MyPod />
        </Route>
        <Route exact path="/html/seattle_classic.html">
          Seattle Classic
        </Route>
        <Route exact path="/html/seattle_downtown.html">
          Seattle Video
        </Route>
        <Route exact path="/html/seattle_shuffle.html">
          Seattle Shuffle
        </Route>
        <Route exact path="/html/seattle_video.html">
          Seattle Video
        </Route>
        <Route exact path="/html/applestore.html">
          Apple Store
        </Route>
        <Route exact path="/html/Britain.html">
          Britain
        </Route>
        <Route exact path="/somewhere/foo.html">
          You've reached the foo page!
        </Route>
        <Route path="/">404 File Not Found! :-(</Route>
      </Switch>
    </Router>
  );
}
