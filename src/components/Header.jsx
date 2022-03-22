/* eslint-disable react/jsx-max-depth */
import React from 'react';
// import { createTheme } from '@mui/system';
// import { ThemeProvider } from '@emotion/react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Paper } from '@mui/material';
// import PlanetsContext from '../context/PlanetsContext';
import StarWarsFont from '../assets/fonts/starwarsfont.ttf';

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
  return (
    <Paper>
      <Box>
        <AppBar
          position="static"
          sx={ { alignItems: 'center' } }
        >
          <Toolbar>
            {/* <ThemeProvider theme={ theme }>
              <CssBaseline /> */}
            <Typography
              variant="h6"
              component="div"
              fontFamily={ StarWarsFont }
              sx={ { fontFamily: 'StarWarsFont' } }
            >
              StarWars Planets Search
            </Typography>
            {/* </ThemeProvider> */}
          </Toolbar>
        </AppBar>
      </Box>
    </Paper>
  );
}
