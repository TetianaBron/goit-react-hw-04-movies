import React, { Component } from 'react';
import Axios from 'axios';
import { BASE_URL, KEY } from '../services/themoviedb-api';
import Loader from 'react-loader-spinner';
import MovieList from '../conponents/MovieList/MovieList';

export default class MoviesPage extends Component {
  state = {
    movies: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await Axios.get(
      `${BASE_URL}/3/trending/all/day?api_key=${KEY}`,
    );

    this.setState({ movies: response.data.results, loading: false });
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div className="MainContainer">
        <h1>Trending today</h1>
        {loading && (
          <Loader
            type="Hearts"
            color="palevioletred"
            height={260}
            width={260}
            timeout={3000}
          />
        )}

        <MovieList movies={movies} />
      </div>
    );
  }
}
