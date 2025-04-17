import { Movie } from "../types/Types";

export const MovieRow = ({ movie, onClick }: { movie: Movie; onClick: () => void }) => (
    <div className="table-row" onClick={onClick}>
      <div className="col title">{movie.Title}</div>
      <div className="col date">{movie.Year}</div>
      <div className="col id">{movie.imdbID}</div>
    </div>
  );