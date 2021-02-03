import React, { Component } from 'react';
import Axios from 'axios';

export default class MoviesPage extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=88cc215d69ec27c443b0ab6deb7f5acb',
    );
    console.log(response.data);

    this.setState({ movies: response.data.results });
    console.log(this.state.movies);
  }

  render() {
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </>
    );
  }
}
