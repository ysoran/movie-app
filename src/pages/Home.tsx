import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../app/store';
import {
  setSearch,
  setYear,
  setType,
  fetchMovies,
} from '../features/movies/movieSlice';
import _ from 'lodash';
import './Home.scss';
import { FilterInputs } from '../components/FilterInputs';
import { MovieTable } from '../components/MovieTable';

function Home() {
    const dispatch = useDispatch<AppDispatch>();

  const { search, year, type, page, movies, totalResults, loading } = useSelector(
    (state: RootState) => state.movies
  );

  const [showSkeleton, setShowSkeleton] = useState(true);
  const debounceRef = useRef(_.debounce(() => dispatch(fetchMovies()), 500));
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch with debounce
  useEffect(() => {
    debounceRef.current();
    return debounceRef.current.cancel;
  }, [search, year, type, page]);

  // Skeleton effect
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setShowSkeleton(loading);
    }, 300);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [loading]);

  const handleSearchChange = (val: string) => dispatch(setSearch(val));
  const handleYearChange = (val: string) => {
    const isValid = /^\d{0,4}$/.test(val); // Allows 0 to 4 digits only (no letters)
    if (isValid) dispatch(setYear(val));
  };
  const handleTypeChange = (val: string) => dispatch(setType(val));
  

  return (
    <div className="home">
      <FilterInputs
        search={search}
        year={year}
        type={type}
        onSearch={handleSearchChange}
        onYear={handleYearChange}
        onType={handleTypeChange}
      />

      <MovieTable showSkeleton={showSkeleton} movies={movies} totalResults={totalResults} page={page} />
    </div>
  );
}

export default Home;
