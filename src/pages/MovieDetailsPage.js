import React from 'react';
import { Route } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetailsPage = () => {
  return (
    <>
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
    </>
  );
};

export default MovieDetailsPage;
