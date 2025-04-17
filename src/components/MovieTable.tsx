import { useNavigate } from "react-router-dom";
import { Movie } from "../types/Types"
import { MovieRow } from "./MovieRow"
import { Button } from '@mui/material';
import { SkeletonRow } from "./SkeletonRow"
import { useMemo } from "react";
import { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";
import { setPage } from "../features/movies/movieSlice";

export const MovieTable = ({ movies, showSkeleton, totalResults, page } : { movies:Movie[], showSkeleton: boolean, totalResults: number, page: number}) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const totalPages = useMemo(() => Math.ceil(totalResults / 10), [totalResults]);
    const handlePageChange = (newPage: number) => dispatch(setPage(newPage));
    return(
        <div className="movie-table">
        <div className="table-row header">
          <div className="col title">Title</div>
          <div className="col date">Release Date</div>
          <div className="col id">IMDb ID</div>
        </div>

        <div className={`row-container ${showSkeleton ? 'skeleton-mode' : ''}`}>
          {showSkeleton
            ? Array.from({ length: 10 }, (_, i) => <SkeletonRow key={i} />)
            : movies.length > 0
              ? movies.map((movie: Movie) => (
                  <MovieRow key={movie.imdbID} movie={movie} onClick={() => navigate(`/movie/${movie.imdbID}`)} />
                ))
              : <div className="no-results">No results found with provided details</div>}
        </div>

        {movies.length > 0 && (
        <div className="pagination-controls">
          <Button disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>Previous</Button>
          <span>Page {page} of {totalPages}</span>
          <Button disabled={page >= totalPages} onClick={() => handlePageChange(page + 1)}>Next</Button>
        </div>
      )}
      </div>
    )
}