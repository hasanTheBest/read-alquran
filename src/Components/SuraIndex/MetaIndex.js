import React from "react";
import { Grid, Typography, Link, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  suraIndexContainer: {
    padding: "3rem 0",
  },

  indexLink: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    maxWidth: 300,
    padding: "1rem",
    "&:hover": {
      textDecoration: "none",
    },
  },

  ChapterNumberWrapper: {
    display: "flex",
    alignItems: "center",
  },
  chapterNumber: {
    paddingRight: "1rem",
  },
  suraNameWrapper: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    flexWrap: "nowrap",
    width: "100%",
  },
  nameArWrapper: {
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    flexWrap: "nowrap",
    width: "99%",
  },
  verseKeyWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  ayaText: {
    direction: "rtl",
    textAlign: "right",
  },
}));

const MetaIndex = ({ metaInfo }) => {
  const classes = useStyles();

  return (
    <>
      {metaInfo.map(({ index, name, tname, ename, sura, aya, text }) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={`${index}_sura_${sura}_aya${aya}`}
        >
          <Link
            className={classes.indexLink}
            tabIndex="0"
            component={RouterLink}
            to={`sura/${sura}:${aya}`}
          >
            <Typography
              variant="h6"
              component="span"
              className={classes.chapterNumber}
            >
              {index}.
            </Typography>

            <div className={classes.suraNameWrapper}>
              <Typography
                variant="body1"
                color="initial"
                component="strong"
                className={classes.verseKeyWrapper}
              >
                <span>
                  {tname}{" "}
                  <small>
                    {sura}:{aya}
                  </small>
                </span>
                <Typography
                  variant="h6"
                  component="strong"
                  style={{ textAlign: "right" }}
                >
                  {Number(sura).toLocaleString("ar-EG")}
                  {"  "}
                  {name}
                </Typography>
              </Typography>
              <Typography
                variant="h6"
                component="strong"
                noWrap
                className={classes.ayaText}
              >
                {Number(aya).toLocaleString("ar-EG")}
                {"  "} {text}
              </Typography>
            </div>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default MetaIndex;
