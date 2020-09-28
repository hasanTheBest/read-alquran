import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import AyaArabic from "./AyaArabic";

const useStyles = makeStyles(() => ({
  readingMode: {
    display: "inline",
    textAlign: "center",
    "& > h5": {
      display: "inline",
    },
  },
}));

const ReadingMode = ({ props }) => {
  const classes = useStyles();

  return (
    <Box p={3} className={classes.readingMode}>
      <AyaArabic {...props} />
    </Box>
  );
};

export default ReadingMode;
