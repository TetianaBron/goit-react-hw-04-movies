import React from 'react';
import { NavLink } from 'react-router-dom';
import Layout from '../Layout/Layout';
import './MovieCard.scss';

const MovieCard = ({
  backdrop_path,
  genres,
  overview,
  release_date,
  title,
  vote_average,
}) => {
  return (
    <Layout>
      <div className="Card">
        {backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
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

          {genres && (
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
    </Layout>
  );
};

export default MovieCard;
