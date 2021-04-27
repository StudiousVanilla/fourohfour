import { Route } from "react-router-dom";
import {BrowserRouter as Router}  from "react-router-dom";
import Home from "./components/Home"
import Header from "./components/Header"


function App() {
  return (
    <Router>
      <Route exact path ='/'>
        <Header/>
        <Home/>
      </Route>
      <Route exact path ='/yo'>
        <p>Yooo</p>
      </Route>
    </Router>
  );
}

export default App;
