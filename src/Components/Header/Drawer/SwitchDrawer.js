import React, { useContext } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Box } from "@material-ui/core";
import { SettingContext } from "../../../Context/SettingsContext";

export default function SwitchLabels() {
  const {
    showWbw,
    showWbwTranslation,
    showWbwTransliteration,
    showAya,
    showTranslation,
    showTransliteration,
    showTajweed,
    setSwitchValue,
  } = useContext(SettingContext);

  const handleChange = (event) => {
    setSwitchValue(event);
  };

  return (
    <Box p={2}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch
              checked={showWbw}
              onChange={handleChange}
              name="showWbw"
              color="primary"
            />
          }
          label="Word by Word"
        />
        {showWbw && (
          <FormControlLabel
            control={
              <Switch
                checked={showWbwTransliteration}
                onChange={handleChange}
                name="showWbwTransliteration"
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
                name="showWbwTranslation"
                color="primary"
              />
            }
            label="Translation Wbw"
          />
        )}
        <FormControlLabel
          control={
            <Switch
              checked={showAya}
              onChange={handleChange}
              name="showAya"
              color="primary"
            />
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
                color="primary"
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
