import React from "react";
import { Grid, Link, Typography, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  indexLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
  nameArWrapper: {
    textAlign: "right",
  },
}));

const SuraMeta = ({ suraList }) => {
  const classes = useStyles();

  return (
    <>
      {suraList.map(({ index, type, tname, name, ayas, ename }) => (
        <Grid item xs={12} sm={6} md={4} key={index + tname}>
          <Link
            className={classes.indexLink}
            tabIndex="0"
            to={`sura/${index}`}
            component={RouterLink}
          >
            <Typography
              variant="body1"
              color="initial"
              component="span"
              className={classes.ChapterNumberWrapper}
            >
              <Typography
                variant="h6"
                component="span"
                className={classes.chapterNumber}
              >
                {index}.
              </Typography>

              <Typography variant="h6" color="initial" component="span">
                {/* <Tooltip title={name}></Tooltip> */}
                {tname}
                <Typography variant="subtitle2" color="initial">
                  {ename}
                </Typography>
              </Typography>
            </Typography>

            <Typography
              variant="h5"
              color="initial"
              component="span"
              className={classes.nameArWrapper}
            >
              <Typography variant="h5">{name}</Typography>

              <Typography variant="subtitle2" color="initial">
                {ayas} Ayah
              </Typography>
            </Typography>
          </Link>
        </Grid>
      ))}
    </>
  );
};

export default React.memo(SuraMeta);
