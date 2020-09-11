import React from "react";
import reactHtmlParser from "react-html-parser";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ayaWordTextWrapper: {
    direction: "rtl",
    textAlign: "right",
    paddingTop: ".5rem",
  },

  ayaWordText: {
    fontSize: ({ fontSizeArabic }) => fontSizeArabic,
    display: "inline-block",
    lineHeight: 1.6,
  },
}));

const GenerateAyaFromWords = ({ words, page }) => {
  const classes = useStyles();

  return (
    <div className={classes.ayaWordTextWrapper}>
      {words.map(({ id, code }) => (
        <Typography
          variant="h3"
          component="b"
          className={classes.ayaWordText}
          style={{
            fontFamily: `QCF_P${String(page).padStart(3, 0)}`,
          }}
          key={String(id)}
        >
          {reactHtmlParser(code)}
        </Typography>
      ))}
    </div>
  );
};

export default GenerateAyaFromWords;
