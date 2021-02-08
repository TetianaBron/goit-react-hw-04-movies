import React from 'react';
import Layout from '../Layout/Layout';
import './AdditionalInfoToCard.scss';
import { Switch, NavLink, Route } from 'react-router-dom';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';

const AdditionalInfoToCard = ({ path, url }) => {
  return (
    <div>
      <div className="Container">
        <Layout>
          <p className="Title">Additional information</p>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </Layout>
      </div>

      <Switch>
        <Route path={`${path}/cast`} component={MovieCast} />
        <Route path={`${path}/reviews`} component={MovieReviews} />
      </Switch>
    </div>
  );
};

export default AdditionalInfoToCard;
