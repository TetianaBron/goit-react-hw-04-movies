import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../conponents/Layout/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from '../conponents/SearchBar/SearchBar';
import { BASE_URL, KEY } from '../services/themoviedb-api';
import Loader from 'react-loader-spinner';

export default class MoviePage extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    query: '',
    movies: [],
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (prevState.query !== query) {
      this.setState({ loading: true });

      fetch(
        `${BASE_URL}/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
      )
        .then(res => res.json())
        .then(res => this.setState({ movies: res.results }))
        .then(() => {
          if (this.state.movies.length === 0) {
            return toast.error('Ничего не найдено...');
          }
        })
        .catch(error => toast.error(error.message))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <Layout>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {loading && (
          <Loader
            type="Hearts"
            color="palevioletred"
            height={260}
            width={260}
            timeout={3000}
          />
        )}
        <ul>
          {movies &&
            movies.map(({ id, title }) => (
              <li key={id}>
                <Link to={`${this.props.match.url}/${id}`}>{title}</Link>
              </li>
            ))}
        </ul>
        <ToastContainer />
      </Layout>
    );
  }
}
