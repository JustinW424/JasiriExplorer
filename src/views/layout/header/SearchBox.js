import * as React from 'react';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
  return (
    <Container className="pt-[78px]">
      <Container
        className="px-4 py-4 flex items-center main-component rounded-sm"
        component="form"
      >
        <InputBase
          className='text-title'
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for blocks, accounts, transactions and tokens"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        
        <Divider sx={{ height: 33, m: 0.5, bgcolor: 'rgba(231, 231, 232, 0.16)' }} orientation="vertical" />
        <IconButton className="p-3 " type="submit" sx={{ p: '10px', color: 'rgba(231, 231, 232, 0.33)' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Container>
    </Container>
  );
}
