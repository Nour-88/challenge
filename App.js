import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewMoretv from "./components/Tv/ViewMoretv";
import ViewMore from "./components/Movie/ViewMore";
import FrontMovies from "./components/Movie/FrontMovies";
import FrontTv from "./components/Tv/FrontTv";
import "./style.css";
import Menu from "./components/Menu/Menu";
import Counter from "./components/Redux/Counter";

function App() {
  return (
    <Router>
      <>
        <Menu />
        <Switch>
          <Route path="/" exact component={FrontMovies}></Route>
          <Route path="/Counter" component={Counter}></Route>
          <Route path="/Shows" component={FrontTv}></Route>
          <Route path="/view/:movie_id" component={ViewMore}></Route>
          <Route path="/TVview/:movie_id" component={ViewMoretv}></Route>
        </Switch>
      </>
    </Router>
  );
}
export default App;
