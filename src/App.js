import "./App.css";
import Home from "./Pages/Home";
import Rooms from "./Pages/Rooms";
import SingleRoom from "./Pages/SingleRoom";
import Error from "./Pages/Error";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
