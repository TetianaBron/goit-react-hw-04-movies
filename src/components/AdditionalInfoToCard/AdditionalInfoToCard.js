import React from 'react';
import Layout from '../Layout/Layout';
import './AdditionalInfoToCard.scss';
import { Switch, NavLink, Route } from 'react-router-dom';
import MovieCast from '../MovieCast/MovieCast';
import MovieReviews from '../MovieReviews/MovieReviews';
import routes from '../../routes';

const AdditionalInfoToCard = ({ path, url, from }) => {
  return (
    <div>
      <div className="Container">
        <Layout>
          <p className="Title">Additional information</p>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${url}${routes.cast}`,
                  state: { from },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${url}${routes.reviews}`,
                  state: { from },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </Layout>
      </div>

      <Switch>
        <Route path={`${path}${routes.cast}`} component={MovieCast} />
        <Route path={`${path}${routes.reviews}`} component={MovieReviews} />
      </Switch>
    </div>
  );
};

export default AdditionalInfoToCard;
