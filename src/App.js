import React from 'react';
import { Switch, NavLink, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => (
  <>
    <ul className="Site-nav-list">
      <li className="NavLink-item">
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li className="NavLink-item">
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies" component={MoviesPage} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
