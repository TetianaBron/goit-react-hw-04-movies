import React, { Component } from 'react';
import Layout from '../conponents/Layout/Layout';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const KEY = '88cc215d69ec27c443b0ab6deb7f5acb';

export default class MoviesPage extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`,
    );
    //console.log(response.data);

    this.setState({ movies: response.data.results });
    //console.log(this.state.movies);
  }

  render() {
    const { movies } = this.state;

    return (
      <Layout>
        <h1>Trending today</h1>
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </Layout>
    );
  }
}
