import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { SettingContext } from "../../../Context/SettingsContext";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function SliderNav() {
  const classes = useStyles();
  const { fontSizeArabic, fontSizeTranslation, setFontSize } = React.useContext(
    SettingContext
  );

  const handleChangeFontSize = (e, newValue, text) => {
    setFontSize(newValue, text);
  };

  return (
    <Box p={2}>
      <div className={classes.root}>
        <Typography id="font-size-arabic" gutterBottom noWrap>
          Font Size (Arabic) <b>{`${fontSizeArabic}px`}</b>
        </Typography>
        <Slider
          defaultValue={48}
          value={fontSizeArabic}
          valueLabelFormat={fontSizeArabic}
          aria-labelledby="font-size-arabic"
          onChange={(e, value) => handleChangeFontSize(e, value, "arabic")}
          step={1}
          valueLabelDisplay="auto"
          min={30}
          max={80}
        />
      </div>

      <div className={classes.root}>
        <Typography id="font-size-translation" gutterBottom noWrap>
          Font Size (translations) <b>{`${fontSizeTranslation}px`}</b>
        </Typography>
        <Slider
          defaultValue={18}
          value={fontSizeTranslation}
          valueLabelFormat={fontSizeTranslation}
          onChange={(e, value) => handleChangeFontSize(e, value, "translation")}
          aria-labelledby="font-size-translation"
          step={1}
          valueLabelDisplay="auto"
          min={14}
          max={34}
        />
      </div>
    </Box>
  );
}
