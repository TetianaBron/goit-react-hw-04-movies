import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getQueryParams from '../utils/getQueryParams';
import SearchBar from '../conponents/SearchBar/SearchBar';
import { BASE_URL, KEY } from '../services/themoviedb-api';
import Loader from 'react-loader-spinner';
import MovieList from '../conponents//MovieList/MovieList';

export default class MoviePage extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    movies: [],
    loading: false,
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  fetchMovies = query => {
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
  };

  handleChangeQuery = query => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <div className="MainContainer">
        <SearchBar onSubmit={this.handleChangeQuery} />
        {loading && (
          <Loader
            type="Hearts"
            color="palevioletred"
            height={260}
            width={260}
            timeout={3000}
          />
        )}

        {movies.length > 0 && <MovieList movies={movies} />}

        <ToastContainer />
      </div>
    );
  }
}
