import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Paper } from '@mui/material';
import starWarsHeader from '../assets/bg/star-wars-header.png';

export default function Header() {
  return (
    <Paper sx={ { backgroundImage: '#000000', backgroundColor: '#000000' } }>
      <AppBar
        position="static"
        sx={ {
          alignItems: 'center',
          backgroundColor: 'black',
          backgroundImage:
            'linear-gradient(90deg, rgba(13, 13, 13, 0.3), rgba(13, 13, 13, 0.3))',
        } }
      >
        <img src={ starWarsHeader } alt="header logo" />
      </AppBar>
    </Paper>
  );
}
