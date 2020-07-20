import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function HouseType() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={serviceItem}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="" variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const serviceItem = [
  { title: 'House' },
  { title: 'Apartment'},
  { title: 'Townhouse'},
  
];