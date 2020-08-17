import React from "react";
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
} from "@material-ui/core";

// Material UI Icons
import { Menu } from "@material-ui/icons";
// export { default as Logo } from "./Logo";

const useStyles = makeStyles((theme) => ({
  toolbarWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary">
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
        <Settings />
      </div>
    </AppBar>
  );
};

export default Header;
