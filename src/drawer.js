import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "./menu";
import logo from "./assests/logo.png";
import Navbar from "./Navbar";
import NestedList from "./list";
import ButtonAppBar from "./appbar";
import BasicCard from "./card";
import SimplePaper from "./paper";
const drawerWidth = 240;

export default function PermanentDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#ffffff",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "#000",
              overflow: "inherit",
            }}
          >
            <Navbar />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box component="img" src={logo} sx={{ width: 1, p: 2, my: 2 }}></Box>

        <NestedList />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Menu />
        <BasicCard />
        <ButtonAppBar />
        <SimplePaper />
      </Box>
    </Box>
  );
}
