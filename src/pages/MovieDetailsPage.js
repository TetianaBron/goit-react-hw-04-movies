import React, { Component } from 'react';
import Axios from 'axios';
import MovieCard from '../conponents/MovieCard/MovieCard';
import AdditionalInfoToCard from '../conponents/AdditionalInfoToCard/AdditionalInfoToCard';
import { BASE_URL, KEY } from '../services/themoviedb-api';
import Loader from 'react-loader-spinner';
import routes from '../routes';

export default class MovieDetailsPage extends Component {
  state = {
    backdrop_path: null,
    genres: [],
    overview: null,
    release_date: null,
    title: null,
    vote_average: null,
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const { movieId } = this.props.match.params;

    const response = await Axios.get(
      `${BASE_URL}/3/movie/${movieId}?api_key=${KEY}&language=en-US`,
    );

    this.setState({ ...response.data });
    this.setState({ loading: false });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(routes.movies);
  };

  render() {
    const {
      backdrop_path,
      genres,
      overview,
      release_date,
      title,
      vote_average,
      loading,
    } = this.state;

    return (
      <>
        {loading && (
          <Loader
            type="Hearts"
            color="palevioletred"
            height={260}
            width={260}
            timeout={3000}
          />
        )}

        <div className="MainContainer">
          <button
            type="button"
            className="BackButton"
            onClick={this.handleGoBack}
          >
            Back
          </button>

          <MovieCard
            backdrop_path={backdrop_path}
            genres={genres}
            overview={overview}
            release_date={release_date}
            title={title}
            vote_average={vote_average}
          />
        </div>

        <AdditionalInfoToCard
          movieId={this.props.match.params.movieId}
          path={this.props.match.path}
          url={this.props.match.url}
          from={this.props.location?.state?.from || routes.movies}
        />
      </>
    );
  }
}
