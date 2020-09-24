import React from "react";
import {
  IconButton,
  Divider,
  Drawer,
  useMediaQuery,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import SwitchDrawer from "./SwitchDrawer";
import SliderNav from "./SliderNav";
import SelectNav from "./SelectNav";
import { SettingContext } from "../../../Context/SettingsContext";
import { CloseRounded } from "@material-ui/icons";

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    zIndex: theme.zIndex.appBar - 10,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer() {
  const theme = useTheme();
  const breakUp1440 = useMediaQuery(theme.breakpoints.up(1440));
  const classes = useStyles();
  const { openDrawer, handleOpenDrawer } = React.useContext(SettingContext);

  const handleDrawerToggle = () => {
    handleOpenDrawer();
  };

  const drawer = (
    <div className="drawer">
      <div className={classes.toolbar}>
        {breakUp1440 ? (
          <Box p={2}>
            <Typography variant="h5">Controls</Typography>
          </Box>
        ) : (
          <IconButton aria-label="Close" onClick={handleDrawerToggle}>
            <CloseRounded />
          </IconButton>
        )}
      </div>
      <Divider />

      <SwitchDrawer />
      <Divider />

      <SliderNav />
      <Divider />

      <SelectNav />
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {!breakUp1440 ? (
          <Drawer
            variant="persistent"
            anchor={theme.direction === "rtl" ? "left" : "right"}
            open={openDrawer}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            anchor="right"
            open
          >
            {drawer}
          </Drawer>
        )}
      </nav>
    </div>
  );
}

export default ResponsiveDrawer;
