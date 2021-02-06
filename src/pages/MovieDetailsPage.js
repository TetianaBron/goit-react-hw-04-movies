import React, { Component } from 'react';
import Axios from 'axios';
import MovieCard from '../conponents/MovieCard/MovieCard';
// import { Route } from 'react-router-dom';
// import Cast from './Cast';
// import Reviews from './Reviews';

export default class MovieDetailsPage extends Component {
  state = {
    backdrop_path: null,
    genres: null,
    overview: null,
    release_date: null,
    title: null,
    vote_average: null,
  };

  async componentDidMount() {
    const KEY = '88cc215d69ec27c443b0ab6deb7f5acb';
    const { movieId } = this.props.match.params;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`,
    );
    console.log(response.data);

    this.setState({ ...response.data });
  }

  render() {
    const {
      backdrop_path,
      genres,
      overview,
      release_date,
      title,
      vote_average,
    } = this.state;
    return (
      <MovieCard
        backdrop_path={backdrop_path}
        genres={genres}
        overview={overview}
        release_date={release_date}
        title={title}
        vote_average={vote_average}
      />
      // <>
      //   <Route path="/movies/:movieId/cast" component={Cast} />
      //   <Route path="/movies/:movieId/reviews" component={Reviews} />
      // </>
    );
  }
}
