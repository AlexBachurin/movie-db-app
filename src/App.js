import React from "react";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MoviePage from "./pages/MoviePage";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
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
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
