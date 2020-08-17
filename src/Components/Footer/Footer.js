import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    padding: "1rem",
    backgroundColor: theme.palette.primary.main,
  },
}));

const Footer = () => {
  const classes = useStyles();

  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="initial">
        All Rights Reserved &copy;Mahmudul Hasan, {year}
      </Typography>
    </footer>
  );
};

export default Footer;
