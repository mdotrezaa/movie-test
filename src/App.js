import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import MovieDetail from "./components/MovieDetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchBox from "./components/SearchBox";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Movie/>
          </Route>
          <Route path="/movie/:id">
            <MovieDetail/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
