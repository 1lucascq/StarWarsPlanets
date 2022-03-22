import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Paper } from '@mui/material';
import starWarsHeader from '../assets/bg/star-wars-header.png';

export default function Header() {
// Preciso de uma forma de dar esse override no Header.
  return (
    <Paper sx={ { backgroundImage: '#000000', backgroundColor: '#000000' } }>
      <AppBar
        position="static"
        sx={ { alignItems: 'center' } }
      >
        <img
          src={ starWarsHeader }
          alt="header logo"
        />
      </AppBar>
    </Paper>
  );
}
