import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import AppBar from './conponents/AppBar/AppBar';
import Loader from 'react-loader-spinner';

const HomePage = lazy(() =>
  import('./pages/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage.js' /* webpackChunkName: "home-details-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);

const App = () => (
  <>
    <AppBar />

    <Suspense
      fallback={
        <Loader
          type="Hearts"
          color="palevioletred"
          height={260}
          width={260}
          timeout={3000}
        />
      }
    >
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Redirect to={routes.home} />
      </Switch>
    </Suspense>
  </>
);

export default App;
