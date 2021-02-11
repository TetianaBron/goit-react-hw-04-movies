import React, { Component } from 'react';
import themoviedbAPI from '../../services/themoviedb-api';
import { toast } from 'react-toastify';
import './MovieCast.scss';
import Layout from '../Layout/Layout';

export default class MovieCast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    themoviedbAPI
      .fetchMovieCast(movieId)
      .then(results => this.setState({ cast: results.cast }))
      .catch(error => toast.error(error.message))
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  }

  render() {
    const { cast } = this.state;

    return (
      <Layout>
        <ul className="CastGallery">
          {cast.length > 0 ? (
            cast.map(({ name, profile_path, character, cast_id }) => (
              <li className="ImageGalleryItem" key={cast_id}>
                <img
                  src={
                    profile_path
                      ? `${themoviedbAPI.IMG_URL}${profile_path}`
                      : `${themoviedbAPI.defaultImage}`
                  }
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))
          ) : (
            <p>There are no cast</p>
          )}
        </ul>
      </Layout>
    );
  }
}
