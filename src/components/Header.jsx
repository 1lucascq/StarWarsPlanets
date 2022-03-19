import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Paper } from '@mui/material';
import PlanetsContext from '../context/PlanetsContext';
import UseSwitchesCustom from './DarkThemeSwitch';

export default function Header() {
  const { darkMode, setDarkMode } = useContext(PlanetsContext);
  return (
    <Paper>
      <Box sx={ { flexGrow: 1 } }>
        <AppBar position="static">
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={ { mr: 2 } }
            >
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
              StarWars Planets API
            </Typography>
            <UseSwitchesCustom />
            {/* <Switch
              color="secondary"
              checked={ darkMode }
              onChange={ () => setDarkMode(!darkMode) }
            /> */}
          </Toolbar>
        </AppBar>
      </Box>
    </Paper>
  );
}
