import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Box } from "@material-ui/core";
import { SettingContext } from "../../../Context/SettingsContext";

export default function SwitchLabels() {
  const {
    showWbw,
    showTranslation,
    showTransliteration,
    showWbwTranslation,
    showWbwTransliteration,
    showTajweed,
    setSwitchValue,
    showAya,
  } = React.useContext(SettingContext);

  const handleChange = (event) => {
    setSwitchValue(event);
  };

  return (
    <Box p={2}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch checked={showWbw} onChange={handleChange} name="wbw" />
          }
          label="Word by Word"
        />
        {showWbw && (
          <FormControlLabel
            control={
              <Switch
                checked={showWbwTransliteration}
                onChange={handleChange}
                name="wbwTransliteration"
                color="primary"
              />
            }
            label="Transliteration Wbw"
          />
        )}
        {showWbw && (
          <FormControlLabel
            control={
              <Switch
                checked={showWbwTranslation}
                onChange={handleChange}
                name="wbwTranslation"
                color="primary"
              />
            }
            label="Translation Wbw"
          />
        )}
        <FormControlLabel
          control={
            <Switch checked={showAya} onChange={handleChange} name="showAya" />
          }
          label="Show Aya"
        />
        {showAya && (
          <FormControlLabel
            control={
              <Switch
                checked={showTajweed}
                onChange={handleChange}
                name="showTajweed"
              />
            }
            label="Tajweed"
          />
        )}
        <FormControlLabel
          control={
            <Switch
              checked={showTranslation}
              onChange={handleChange}
              name="showTranslation"
              color="primary"
            />
          }
          label="Translation"
        />
        <FormControlLabel
          control={
            <Switch
              checked={showTransliteration}
              onChange={handleChange}
              name="showTransliteration"
              color="primary"
            />
          }
          label="Transliteration"
        />
      </FormGroup>
    </Box>
  );
}
