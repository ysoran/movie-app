import { MenuItem, Select, TextField } from "@mui/material";

export const FilterInputs = ({ search, year, type, onSearch, onYear, onType }: any) => (
    <div className="filters">
      <TextField label="Search" value={search} onChange={(e) => onSearch(e.target.value)} />
      <TextField label="Year" value={year} onChange={(e) => onYear(e.target.value)} />
      <Select value={type} onChange={(e) => onType(e.target.value)} displayEmpty>
        <MenuItem value="">All</MenuItem>
        <MenuItem value="movie">Movie</MenuItem>
        <MenuItem value="series">Series</MenuItem>
        <MenuItem value="episode">Episode</MenuItem>
      </Select>
    </div>
  );