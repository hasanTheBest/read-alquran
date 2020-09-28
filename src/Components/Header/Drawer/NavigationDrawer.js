import React, { useContext } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";

import { IndexContext } from "../../../Context/IndexContext";

import {
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  IconButton,
  Divider,
  Drawer,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CloseRounded, Mail, Inbox } from "@material-ui/icons";

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
  toolbar: { ...theme.mixins.toolbar, textAlign: "center" },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  navDrawerLink: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

function NavigationDrawer({
  props: { openNavigationDrawer, toggleNavigationDrawer },
}) {
  const classes = useStyles();
  let { pathname } = useLocation();

  const context = useContext(IndexContext);
  console.log("context", context);

  // const { openNavigationDrawer, toggleNavigationDrawer, handleChangeTab } =
  //   value !== undefined && value;
  // const { handleChangeTab } = value !== undefined && value;
  // console.log("NavigationDrawer -> value", value);

  const handleChangeTab = () => {};

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <IconButton
          color="secondary"
          onClick={toggleNavigationDrawer}
          aria-label="Close"
        >
          <CloseRounded />
        </IconButton>
      </div>
      <Divider />

      <List>
        {pathname.startsWith("/sura") && (
          <>
            {["Sura", "Page", "Juz", "Ruku", "Hizb", "Manzil", "Sajda"].map(
              (text, index) => (
                <Link
                  to="/"
                  component={RouterLink}
                  className={classes.navDrawerLink}
                  key={text}
                >
                  <ListItem
                    button
                    onClick={
                      "function" === typeof handleChangeTab
                        ? (text) => handleChangeTab(text)
                        : console.error("On click handleChangeTab")
                    }
                  >
                    <ListItemIcon>
                      {index % 2 === 0 ? <Inbox /> : <Mail />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              )
            )}
            <Divider />
          </>
        )}

        {/* <List> */}
        {["Home", "About", "Project"].map((text, index) => (
          <Link
            to={"Home" === text ? "/" : `/${text}`}
            component={RouterLink}
            className={classes.navDrawerLink}
            key={text}
          >
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Drawer
          // variant="persistent"
          anchor="left"
          open={openNavigationDrawer}
          onClose={toggleNavigationDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
}

export default NavigationDrawer;
