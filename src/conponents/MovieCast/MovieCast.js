import React, { Component } from 'react';
import Axios from 'axios';
import Layout from '../Layout/Layout';
import './MovieCast.scss';
import { KEY, BASE_URL, IMG_URL } from '../../services/themoviedb-api';

export default class MovieCast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await Axios.get(
      `${BASE_URL}/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
    );

    this.setState({ ...response.data });
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
                      ? `${IMG_URL}/w500/${profile_path}`
                      : `${IMG_URL}/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`
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
