/* eslint-disable react/jsx-max-depth */
import React, { useContext } from 'react';
import { createTheme } from '@mui/system';
import { ThemeProvider } from '@emotion/react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { CssBaseline, Paper } from '@mui/material';
import PlanetsContext from '../context/PlanetsContext';
import UseSwitchesCustom from './DarkThemeSwitch';
// import StarWarsFont from '../assets/fonts/starwarsfont.ttf';

// const theme = createTheme({
//   typography: {
//     fontFamily: 'StarWarsFont, Roboto',
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: `
//         @font-face {
//           font-family: 'StarWarsFont';
//           font-style: normal;
//           font-display: swap;
//           font-weight: 400;
//           src: "local('StarWarsFont'), local('StarWarsFont-Regular'), url(${StarWarsFont}) format('ttf')";
//           unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
//         }
//       `,
//     } } });

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
            {/* <ThemeProvider theme={ theme }>
              <CssBaseline /> */}
            <Typography
              variant="h6"
              component="div"
              sx={ { flexGrow: 1, fontFamily: 'StarWarsFont' } }
            >
              StarWars Planets API
            </Typography>
            {/* </ThemeProvider> */}

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
