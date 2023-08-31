import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import "@fontsource/jost";

import MenuItem from "@mui/material/MenuItem";
import "../../../index.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        style={{
          backgroundColor: "var(--v-2-txt-body-1, #F6973F)",
        }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Jost",
              fontWeight: "600",
              fontSize: "20px",
              color: "#ffffff",
              textDecoration: "none",
              textTransform: "none",
              lineHeight: "24px",
            }}
          >
            <img
              src="../../../../img/Variante=Logo Full White Vector.png"
              alt="Logo"
              loading="lazy"
              style={{
                width: "172px",
                height: "64px",
                margin: "10px",
                /*   marginRight: "100px", */
              }}
            />
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Jost",
              fontWeight: 400,
              /*  letterSpacing: ".3rem", */
              color: "inherit",
              textDecoration: "none",
              textTransform: "none",
            }}
          >
            <img
              src="../../../../img/Variante=Logo Mobile Vector.png"
              alt="Logo"
              loading="lazy"
            />
          </Typography>
          {/* el catalogo que quede en menu reducido */}
          <MenuItem onClick={handleCloseNavMenu} className="categorias">
            <Link to="/productList">Catálogo</Link>
          </MenuItem>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu} className="categorias">
              <Link to="/faq">Preguntas frecuentes</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu} className="categorias">
              <Link to="/nosotros">Sobre nosotros</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu} className="categorias">
              <Link to="/contacto">Contacto</Link>
            </MenuItem>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* Menu hamburguesa */}

            <Menu
              id="menu-appbar"
              /*  className="menu-hamb" */
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                className="links"
                sx={{
                  backgroundColor: "#F6973F",
                }}
              >
                <Link to="/faq">Preguntas frecuentes</Link>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                className="links "
                sx={{ backgroundColor: "#F6973F" }}
              >
                <Link to="/nosotros">Sobre nosotros</Link>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                className="links"
                sx={{ backgroundColor: "#F6973F" }}
              >
                <Link to="/contacto">Contacto</Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
