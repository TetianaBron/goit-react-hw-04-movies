import React, { Component } from 'react';
import themoviedbAPI from '../services/themoviedb-api';
import { toast } from 'react-toastify';
import MovieCard from '../components/MovieCard/MovieCard';
import AdditionalInfoToCard from '../components/AdditionalInfoToCard/AdditionalInfoToCard';
import Spinner from '../components/Spinner/Spinner';
import routes from '../routes';

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    const { movieId } = this.props.match.params;

    themoviedbAPI
      .fetchMovieDetails(movieId)
      .then(movie => this.setState({ movie }))
      .catch(error => {
        toast.error(error.message);
        this.setState({ error: error.message });
      })
      .finally(() => this.setState({ loading: false }));
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const { loading, movie } = this.state;

    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="MainContainer">
              <button
                type="button"
                className="BackButton"
                onClick={this.handleGoBack}
              >
                Back
              </button>

              {this.state.movie && <MovieCard movie={movie} />}
            </div>

            <AdditionalInfoToCard
              path={this.props.match.path}
              url={this.props.match.url}
              from={this.props.location?.state?.from || routes.movies}
            />
          </>
        )}
      </>
    );
  }
}
