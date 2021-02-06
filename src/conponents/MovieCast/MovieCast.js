import React, { Component } from 'react';
import Axios from 'axios';
import Layout from '../Layout/Layout';
import './MovieCast.scss';

export default class MovieCast extends Component {
  state = {
    cast: null,
  };

  async componentDidMount() {
    const KEY = '88cc215d69ec27c443b0ab6deb7f5acb';

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=${KEY}&language=en-US`,
    );
    // console.log(response.data);

    this.setState({ ...response.data });
    // console.log(this.state);
  }

  render() {
    const { cast } = this.state;

    return (
      <Layout>
        <ul>
          {cast &&
            cast.map(({ name, profile_path, character, cast_id }) => (
              <li key={cast_id}>
                <img
                  className="Img"
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
        </ul>
      </Layout>
    );
  }
}
