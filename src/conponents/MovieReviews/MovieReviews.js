import React, { Component } from 'react';
import Axios from 'axios';
import Layout from '../Layout/Layout';
import './MovieReviews.scss';
import { BASE_URL, KEY } from '../../services/themoviedb-api';

export default class MovieReview extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await Axios.get(
      `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
    );

    this.setState({ reviews: response.data.results });
  }

  render() {
    const { reviews } = this.state;

    return (
      <Layout>
        <ul>
          {reviews.length > 0 ? (
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h2>{author}</h2>
                <p>{content}</p>
              </li>
            ))
          ) : (
            <p>There are no reviews</p>
          )}
        </ul>
      </Layout>
    );
  }
}
