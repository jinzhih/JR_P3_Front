import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function RoomNumber() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={roomNumber}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="" variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const roomNumber = [
  { title: '1-2' },
  { title: '3-4'},
  { title: '5+'},
  
];