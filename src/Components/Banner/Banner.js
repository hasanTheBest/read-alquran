import React from "react";
import { makeStyles } from "@material-ui/core";
import QuranQarim from "./QuranQarim";

const useStyles = makeStyles((theme) => ({
  bannerBg: {
    width: "100%",
    height: 230,
    position: "relative",
    background: theme.palette.primary.light,
    marginTop: 60,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.bannerBg}>
        <QuranQarim />
      </div>
    </>
  );
};

export default Banner;
