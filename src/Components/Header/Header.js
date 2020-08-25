import React from "react";
import { useLocation } from "react-router-dom";
import Search from "./Search";
import Settings from "./Settings";

// Material UI Components
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Tooltip,
  Hidden,
} from "@material-ui/core";

// Material UI Icons
import { Menu } from "@material-ui/icons";
import Drawer from "./Drawer/Drawer";
// export { default as Logo } from "./Logo";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 10,
  },
  toolbarWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const Header = () => {
  const classes = useStyles();
  let { pathname } = useLocation();

  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <div className={classes.toolbarWrapper}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Tooltip title="Open Menu">
                <Menu />
              </Tooltip>
            </IconButton>
            <Typography variant="h6">alQuran</Typography>
          </Toolbar>

          {/* Search */}
          <Search />

          {/* Settings */}
          <Hidden lgUp>{pathname.startsWith("/sura") && <Settings />}</Hidden>
        </div>
      </AppBar>

      <Hidden lgUp>{pathname.startsWith("/sura") && <Drawer />}</Hidden>
    </>
  );
};

export default Header;
