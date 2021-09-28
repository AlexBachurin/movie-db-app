import React from "react";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MoviePage from "./pages/MoviePage";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch >
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies/:id">
          <MoviePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
