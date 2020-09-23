import React, { useContext } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";

// Material UI Components
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Tooltip,
  Link,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

// Material UI Icons
import { Menu } from "@material-ui/icons";
import Drawer from "./Drawer/Drawer";
import NavigationDrawer from "./Drawer/NavigationDrawer";

// Custom Component
import { IndexContext } from "../../Context/IndexContext";
import Search from "./Search";
import Settings from "./Settings";

const useStyles = makeStyles((theme) => ({
  appBar: {
    // zIndex: theme.zIndex.drawer + 10,
  },
  toolbarWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  appName: {
    color: "inherit",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const Header = () => {
  const theme = useTheme();
  const breakUp1440 = useMediaQuery(theme.breakpoints.up(1440));
  const classes = useStyles();
  const value = useContext(IndexContext);
  const { toggleNavigationDrawer } = value !== undefined && value;
  let { pathname } = useLocation();

  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <div className={classes.toolbarWrapper}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleNavigationDrawer}
            >
              <Tooltip title="Open Menu">
                <Menu />
              </Tooltip>
            </IconButton>
            <Typography variant="h6">
              <Tooltip title="Al Quranul Qarim">
                <Link to="/" component={RouterLink} className={classes.appName}>
                  alQuran
                </Link>
              </Tooltip>
            </Typography>
          </Toolbar>

          {/* Search */}
          <Search />

          {/* Settings */}
          {pathname.startsWith("/sura") && !breakUp1440 && <Settings />}
        </div>
      </AppBar>

      <NavigationDrawer />

      {pathname.startsWith("/sura") && !breakUp1440 && <Drawer />}
    </>
  );
};

export default React.memo(Header);
