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
  Hidden,
  Link,
} from "@material-ui/core";

// Material UI Icons
import { Menu } from "@material-ui/icons";
import Drawer from "./Drawer/Drawer";
import NavigationDrawer from "./Drawer/NavigationDrawer";

// Custom Component
import { IndexContext } from "../../Context/IndexContext";
import Search from "./Search";
import Settings from "./Settings";
// export { default as Logo } from "./Logo";

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
  const classes = useStyles();
  const value = useContext(IndexContext);
  console.log("Header -> value", value);
  const { toggleNavigationDrawer } = value !== undefined && value;
  let { pathname } = useLocation();

  // const [openNavigationDrawer, setOpenNavigationDrawer] = useState(false);
  // const toggleNavigationDrawer = () =>
  //   setOpenNavigationDrawer(!openNavigationDrawer);

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
          <Hidden lgUp>{pathname.startsWith("/sura") && <Settings />}</Hidden>
        </div>
      </AppBar>

      <NavigationDrawer
      // open={openNavigationDrawer}
      // toggleNavigationDrawer={toggleNavigationDrawer}
      />

      <Hidden lgUp>{pathname.startsWith("/sura") && <Drawer />}</Hidden>
    </>
  );
};

export default React.memo(Header);
