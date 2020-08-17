import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import reactHtmlParser from "react-html-parser";

const styles = makeStyles((theme) => ({
  ayahContainer: {
    direction: "rtl",
    fontFamily: "inherit",
    fontWeight: 600,
    padding: ".8rem .5rem",
    margin: ".5rem 0",
  },
  ayahNumberHafs: {
    fontFamily: "inherit",
    fontWeight: 400,
    marginRight: ".5rem",
  },
}));

const tajweedMarker = (rule, text) => {
  let textSplitted = text.split("");

  rule.annotations.forEach(({ start, rule, end }, i) => {
    textSplitted[start] = textSplitted[start].includes("</span>")
      ? textSplitted[start].replace(
          "</span>",
          `</span><span class=${rule} title=${rule}>`
        )
      : `<span class=${rule} title=${rule}>` + textSplitted[start];

    textSplitted[end] = `</span>` + textSplitted[end];
  });

  return textSplitted.join("");
};

const AyaArabic = ({ tajweedRule, text, index }) => {
  const classes = styles();

  return (
    <>
      <Typography
        variant="h4"
        color="textPrimary"
        component="h5"
        className={classes.ayahContainer}
      >
        {reactHtmlParser(tajweedMarker(tajweedRule, text))}
        <Typography
          variant="h3"
          color="textPrimary"
          component="span"
          className={classes.ayahNumberHafs}
        >
          {index.toLocaleString("ar-EG")}
        </Typography>

        {/* <div className={classes.endAyah}>
          <span className={classes.ayahSign}>&#1757;</span>
          <span className={classes.ayahNumber}>
            {Number(a_id).toLocaleString("ar-EG")}
          </span>
        </div> */}
      </Typography>
    </>
  );
};

export default AyaArabic;
