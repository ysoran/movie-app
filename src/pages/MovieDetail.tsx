import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './MovieDetail.scss';
import { MovieDetails } from '../types/Types';
import { Skeleton } from '@mui/material';

function MovieDetail() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://www.omdbapi.com/?apikey=5a981d8a&i=${imdbID}`)
      .then((res) => {
        if (res.data?.Response === 'True') {
          setMovie(res.data);
        } else {
          setMovie(null);
        }
      })
      .finally(() => setLoading(false));
  }, [imdbID]);

  const renderRow = (label: string, value: string | undefined) => (
    <div className="row">
      <div className="label">{label}</div>
      <div className="value">{loading ? <Skeleton width="60%" /> : value}</div>
    </div>
  );

  return (
    <div className="movie-detail">
      <div className="breadcrumb">
        <Link to="/">← Back to Home</Link>
      </div>

      {loading ? <Skeleton variant="text" height={40} width="30%" /> : <h1>{movie?.Title}</h1>}

      {loading ? (
        <Skeleton variant="rectangular" width={300} height={450} />
      ) : (
        movie?.Poster && movie?.Poster !== 'N/A' && <img src={movie.Poster} alt={movie.Title} />
      )}

      <div className="info-table">
        {renderRow('Release Date:', movie?.Released)}
        {renderRow('IMDb ID:', movie?.imdbID)}
        {renderRow('Duration:', movie?.Runtime)}
        {renderRow('Genre:', movie?.Genre)}
        {renderRow('Director:', movie?.Director)}
        {renderRow('Cast:', movie?.Actors)}
        {renderRow('IMDb Rating:', movie?.imdbRating)}
      </div>
    </div>
  );
}

export default MovieDetail;
