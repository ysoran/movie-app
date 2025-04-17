import { MenuItem, Select, TextField } from "@mui/material";

export const FilterInputs = (
        { search, year, type, onSearch, onYear, onType } :
        {   
            search: string, 
            year: string, 
            type: string, 
            onSearch: (val: string) => void, 
            onYear: (val: string) => void, 
            onType: (val: string) => void 
        }) => (
    <div>
    <div className="filters">
      <TextField label="Movie Title" value={search} onChange={(e) => onSearch(e.target.value)} />
      <TextField label="Release Year" value={year} onChange={(e) => onYear(e.target.value)} />
      <Select value={type} onChange={(e) => onType(e.target.value)} displayEmpty>
        <MenuItem value="">All</MenuItem>
        <MenuItem value="movie">Movie</MenuItem>
        <MenuItem value="series">Series</MenuItem>
        <MenuItem value="episode">Episode</MenuItem>
      </Select>
      
    </div>
    { search.length<3 &&
        <div className="warning">
            You are currently seeing previous results. The search will be performed automatically after you enter at least 3 characters in the <strong>Title</strong> field.
        </div>
    }
    </div>
    
  );