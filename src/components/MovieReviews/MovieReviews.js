import React, { Component } from 'react';
import themoviedbAPI from '../../services/themoviedb-api';
import { toast } from 'react-toastify';
import Layout from '../Layout/Layout';

export default class MovieReview extends Component {
  state = {
    reviews: [],
    error: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    themoviedbAPI
      .fetchMovieReviews(movieId)
      .then(reviews => this.setState({ reviews }))
      .catch(error => {
        toast.error(error.message);
        this.setState({ error: error.message });
      })
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
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
