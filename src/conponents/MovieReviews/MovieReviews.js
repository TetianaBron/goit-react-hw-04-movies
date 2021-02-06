import React, { Component } from 'react';
import Axios from 'axios';
import Layout from '../Layout/Layout';
import './MovieReviews.scss';

export default class MovieReview extends Component {
  state = {
    author: null,
    author_details: null,
  };

  async componentDidMount() {
    const KEY = '88cc215d69ec27c443b0ab6deb7f5acb';

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=${KEY}&language=en-US&page=1`,
    );
    console.log(response.data);

    this.setState({ ...response.results });
    console.log(this.state);
  }

  render() {
    const { author, author_details } = this.state;

    return (
      <Layout>
        <p>Reviews</p>
        {/* <ul>
                {cast && cast.map(({ name, profile_path, character, cast_id }) => (
                    <li key={cast_id}>
                         <img className="Img"
                             src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                             alt={name}
                        />
                        <p>{name}</p>
                        <p>Character: {character}</p>
                    </li>))}
                </ul> */}
      </Layout>
    );
  }
}
