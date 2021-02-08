import React, { Component } from 'react';
import { toast } from 'react-toastify';
import './SearchBar.scss';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;

    if (query.trim() === '') {
      toast('Введите что-то.');
      return;
    }

    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <div className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <input
            className="SearchFormInput"
            type="text"
            name="query"
            value={query}
            onChange={this.handleQueryChange}
            autoComplete="off"
            autoFocus
          />
          <button type="submit" className="SearchFormButton">
            Search
          </button>
        </form>
      </div>
    );
  }
}
