import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from '../conponents/SearchBar/SearchBar';

export default class MoviePage extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    query: '',
    movies: [],
    loading: false,
    error: null,
  };

  // async  componentDidMount(prevProps) {
  //   if (this.state.query) {

  //     await this.setState({ loading: true });
  //     this.setState({ movies: [] });
  //     console.log(this.state.query);

  //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=88cc215d69ec27c443b0ab6deb7f5acb&language=en-US&query=${this.state.query}&page=1&include_adult=false`)
  //       .then(res => res.json())
  //       .then(res => this.setState({ movies: res.results }))
  //       .finally(() => this.setState({ loading: false }));
  //   }
  // }

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast('Введите что-то.');
      return;
    }

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=88cc215d69ec27c443b0ab6deb7f5acb&language=en-US&query=${this.state.query}&page=1&include_adult=false`,
    )
      .then(res => res.json())
      .then(res => this.setState({ movies: res.results }))
      .then(() => {
        if (this.state.movies.length === 0) {
          return toast.error('Ничего не найдено...');
        }
      })
      .catch(error => toast.error(error.message))
      .finally(() => this.setState({ loading: false, query: '' }));
  };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  render() {
    const { query, movies, loading } = this.state;

    return (
      <>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={query}
        />
        <ul>
          {loading && <h1>Loading...</h1>}
          {movies && movies.map(({ id, title }) => <li key={id}>{title}</li>)}
        </ul>
        <ToastContainer />
      </>
    );
  }
}
