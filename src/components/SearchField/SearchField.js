import * as React from 'react';

import { useHistory } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

function SearchField() {
    const [ searchQuery, setSearchQuery ] = React.useState();

    const history = useHistory();

    function handleSubmit(event){
        console.log("test");
    }


    return (
    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }} onSubmit={handleSubmit}>
        <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Resources"
        inputProps={{ 'aria-label': 'search resources' }}
        value = {searchQuery}
        onChange={({target: {value}}) => setSearchQuery(value)}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={() => history.push('/search/'+searchQuery)}>
        <SearchIcon />
        </IconButton>
    </Paper>
    );
}

export default SearchField;