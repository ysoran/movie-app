import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Movie } from '../../types/Types';

interface MovieState {
  movies: Movie[];
  totalResults: number;
  search: string;
  year: string;
  type: string;
  page: number;
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  totalResults: 0,
  search: 'Pokemon',
  year: '',
  type: '',
  page: 1,
  loading: false,
  error: null,
};

export const fetchMovies = createAsyncThunk<
  { movies: Movie[]; totalResults: number },
  void,
  { state: { movies: MovieState }; rejectValue: string }
>(
  'movies/fetchMovies',
  async (_, { getState, rejectWithValue }) => {
    try {
      const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
      const { search, year, type, page } = getState().movies;
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&y=${year}&type=${type}&page=${page}`
      );

      if (response.data.Response === 'False' && response.data.Error!=="Movie not found!") {
        return rejectWithValue(response.data.Error || 'Unknown error from OMDb API');
      }

      return {
        movies: response.data.Search || [],
        totalResults: parseInt(response.data.totalResults) || 0,
      };
    } catch (error: any) {
        if(error.response.data.Error==="Movie not found!") {
            return {
                movies: [],
                totalResults: 0,
            };
        }

        if (error.response && error.response.data && error.response.data.Error) {
            return rejectWithValue(error.response.data.Error);
          }
    
        return rejectWithValue(error.message || 'Unknown error occurred');
    }
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
      state.page = 1;
    },
    setYear(state, action: PayloadAction<string>) {
      state.year = action.payload;
      state.page = 1;
    },
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
      state.page = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.movies;
        state.totalResults = action.payload.totalResults;
        state.error = null;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch movies';
      });
  },
});

export const { setSearch, setYear, setType, setPage } = movieSlice.actions;
export default movieSlice.reducer;
