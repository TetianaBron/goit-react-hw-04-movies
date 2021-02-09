import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.scss';
import { IMG_URL } from '../../services/themoviedb-api';

const MovieCard = ({
  backdrop_path,
  genres,
  overview,
  release_date,
  title,
  vote_average,
}) => {
  return (
    <>
      <div className="Card">
        {backdrop_path && (
          <img
            src={
              backdrop_path
                ? `${IMG_URL}/w500/${backdrop_path}`
                : `${IMG_URL}/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`
            }
            alt={title}
          />
        )}

        <div className="CardInfo">
          <h1>{title}</h1>
          {vote_average > 0 && (
            <p>
              <span className="Title">User Score:</span> {vote_average * 10}%
            </p>
          )}

          <p>
            <span className="Title">Release date:</span> {release_date}
          </p>
          {overview && (
            <>
              <h2>Overview</h2>
              <p>{overview}</p>
            </>
          )}

          {genres.length > 0 && (
            <>
              <h2>Genres</h2>
              <ul className="Genres">
                {genres.map(({ id, name }) => (
                  <li key={id} className="GenresItem">
                    {name}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

MovieCard.defaultProps = {
  backdrop_path: 'wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
};

MovieCard.propTypes = {
  backdrop_path: PropTypes.string,
  genres: PropTypes.array,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
};

export default MovieCard;
