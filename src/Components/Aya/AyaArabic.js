import React from "react";
import { SettingContext } from "../../Context/SettingsContext";
import { Typography, makeStyles } from "@material-ui/core";
import { tajweedMarker } from "../../Helper/helper";
import reactHtmlParser from "react-html-parser";
import WebfontLoader from "@dr-kobros/react-webfont-loader";

const styles = makeStyles((theme) => ({
  ayahContainer: ({ fontSizeArabic, selectItemFont }) => ({
    direction: "rtl",
    fontFamily:
      selectItemFont === "Old Madina Mushaf" ? "Uthmanic Hafs" : selectItemFont,
    fontSize: fontSizeArabic,
    fontWeight: 600,
    padding: ".8rem .5rem",
    margin: ".5rem 0",
    lineHeight: 2,
  }),
  ayahNumberHafs: {
    fontFamily: "inherit",
    fontWeight: 400,
    marginRight: ".5rem",
  },

  endAyah: {
    display: "inline",
    position: "relative",
    marginRight: "10px",
  },

  ayahSign: {
    fontFamily: "inherit",
  },

  ayahNumber: {
    display: "inline",
    position: "absolute",
    top: "50%",
    left: "50%",
    fontFamily: "inherit",
    transform: "translate(-50%, -40%)",
  },
}));

const AyaArabic = ({ tajweedRule, text, index }) => {
  const { fontSizeArabic, selectItemFont } = React.useContext(SettingContext);
  const classes = styles({ fontSizeArabic, selectItemFont });

  return (
    <>
      <Typography
        variant="h4"
        color="textPrimary"
        component="h5"
        className={classes.ayahContainer}
      >
        {tajweedRule
          ? reactHtmlParser(tajweedMarker(tajweedRule, text))
          : reactHtmlParser(text)}
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
