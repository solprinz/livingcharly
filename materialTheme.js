import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#FE9331" /* NARANJA */,
      secondary: "#FFFFEB" /* Fondo, + clarito */,
    },
    secondary: {
      main: "#000000",
      secondary: "#ffffff",
    },
  },
});

/* de más claro a más oscuro:
1 - #FFFFEB - fondo
2 - #FAF5C4 - fondo del InfoBanner (4 iconos)
3 - #FFAD4C - naranja mas clarito
4 - #FE9331 Navbar
5 #F55B1C - Naranja más oscuro. Botones?
 acento : #3AB7C8 (celeste) 
 */
