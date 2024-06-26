import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Stack,
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Link, NavLink } from "react-router-dom";
import NavButton from "../UI/NavButton";

export default function NavBar() {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleMenuClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backdropFilter: "blur(10px)", px: 8 }}
        color="transparent"
        elevation={5}
      >
        <Toolbar>
          <Stack component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
              <Stack direction="row" gap={2} height={75}>
                <img
                  style={{ height: "75px" }}
                  src="../../public/logo.jpg"
                ></img>
              </Stack>
            </NavLink>
          </Stack>
          {isPhone ? (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon onClick={handleMenuClick} />
            </IconButton>
          ) : (
            <Box>
              <NavButton to="/">Home</NavButton>
              <NavButton to="/aboutus">Aboutus</NavButton>
              <NavButton to="/course">Courses</NavButton>
              <NavButton to="/gallery">Gallery</NavButton>
              <NavButton to="/team">Team</NavButton>
              <NavButton to="/contact">Contact</NavButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
