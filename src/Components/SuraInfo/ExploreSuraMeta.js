import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  nameArabic: {
    direction: "rtl",
  },
}));

const ExploreSuraMeta = ({ info, id }) => {
  const classes = useStyles();

  const { index, ayas, tname, ename, type, rukus } = info[id - 1];

  return (
    <>
      <Typography variant="h2" className={classes.nameArabic}>
        <span className={`raq raq-surah${index}`}></span>
      </Typography>

      <Typography variant="h6">
        {index}
        {". "}
        {tname.toUpperCase()} - {ename}
      </Typography>

      <Typography variant="body1">
        <b>
          {ayas}
          {"  "}
        </b>
        Ayas,{" "}
        <b>
          {rukus}
          {"  "}
        </b>
        Rukus, Type <b>{type}</b>
      </Typography>
    </>
  );
};

export default ExploreSuraMeta;
