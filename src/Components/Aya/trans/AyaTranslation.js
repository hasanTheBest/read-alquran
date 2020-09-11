import React, { useContext } from "react";
import { SettingContext } from "../../../Context/SettingsContext";
import { suraContext } from "../../../Context/SuraContext";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  transBn: {
    fontSize: ({ fontSizeTranslation }) => fontSizeTranslation,
    letterSpacing: 1,
    padding: ".5rem",
  },
}));

const AyaTranslation = ({ ayaNum }) => {
  const { ayaTranslation, fontSizeTranslation } = useContext(SettingContext);
  const { trBn, trEn } = useContext(suraContext);

  const classes = useStyles({ fontSizeTranslation });
  return (
    <>
      {"Mojibor Rahman" === ayaTranslation ? (
        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
          className={classes.transBn}
        >
          <span>{ayaNum.toLocaleString("bn")} | </span>
          {trBn.aya[ayaNum - 1].text}
        </Typography>
      ) : (
        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
          className={classes.transBn}
        >
          <span>{ayaNum.toLocaleString("en")} . </span>
          {Boolean(trEn.aya) && trEn.aya[ayaNum - 1].text}
        </Typography>
      )}
    </>
  );
};

export default AyaTranslation;
