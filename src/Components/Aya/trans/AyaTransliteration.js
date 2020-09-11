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

const AyaTransliteration = (ayaNum) => {
  const { fontSizeTranslation } = useContext(SettingContext);
  const { trlEn } = useContext(suraContext);

  const classes = useStyles({ fontSizeTranslation });

  return (
    <Typography
      variant="body1"
      color="textSecondary"
      component="p"
      className={classes.transBn}
    >
      <span>{ayaNum.toLocaleString("en")} . </span>
      {Boolean(trlEn) && trlEn.aya[ayaNum - 1].text}
    </Typography>
  );
};

export default AyaTransliteration;
