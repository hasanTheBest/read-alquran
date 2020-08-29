import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  makeStyles,
  Typography,
  NativeSelect,
} from "@material-ui/core";
import { SettingContext } from "../../../Context/SettingsContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginLeft: 0,
    minWidth: 120,
  },
  selectEachWrapper: {
    display: "flex",
    flexDirection: "column",
    "&:not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectNav = () => {
  const classes = useStyles();
  const {
    selectItemFont,
    ayaTranslation,
    ayaRecitation,
    wordTranslation,
    setSelectItemValue,
  } = React.useContext(SettingContext);

  // const [state, setState] = React.useState({
  //   font: 10,
  //   name: "font",
  // });

  const handleChangeOnSelect = (event) => {
    const name = event.target.name;
    setSelectItemValue(event, name);
    // setState({
    //   ...state,
    //   [name]: event.target.value,
    // });
  };

  return (
    <Box p={2}>
      {/* Font */}
      <div className={classes.selectEachWrapper}>
        <Typography variant="body1" component="span">
          Font
        </Typography>

        <FormControl required className={classes.formControl}>
          <Select
            native
            value={selectItemFont}
            onChange={handleChangeOnSelect}
            name="font"
            inputProps={{
              id: "font-native-required",
            }}
          >
            <option value="Uthmanic Hafs">Uthmanic Hafs</option>
            <option value="me_quran">me_quran</option>
            <option value="Uthmanic TN">Uthmanic TN</option>
            <option value="KFGQPC Uthman Taha Naskh">
              KFGQPC Uthman Taha Naskh
            </option>
            <option value="Old Madina Mushaf">Old Madina Mushaf</option>
            <option value="Noore Hidayat">Noore Hidayat</option>
            <option value="Nafees Nastaleeq">Nafees Nastaleeq</option>
          </Select>
        </FormControl>
      </div>

      {/* Word Translation */}
      <div className={classes.selectEachWrapper}>
        <Typography variant="body1" component="span">
          Translation (Word)
        </Typography>

        <FormControl required className={classes.formControl}>
          <Select
            native
            value={wordTranslation}
            onChange={handleChangeOnSelect}
            name="wordTranslation"
            inputProps={{
              id: "word-translation-native-required",
            }}
          >
            <option value="word-tr-bangla">Bangla</option>
            <option value="word-tr-english">English</option>
          </Select>
        </FormControl>
      </div>

      {/* Translation */}
      <div className={classes.selectEachWrapper}>
        <Typography variant="body1" component="span">
          Translation
        </Typography>

        <FormControl required className={classes.formControl}>
          <NativeSelect
            native
            value={ayaTranslation}
            onChange={handleChangeOnSelect}
            name="translation"
            inputProps={{
              id: "translation-native-required",
            }}
          >
            <optgroup label="Default">
              <option value="Mojibor Rahman">Mojibor Rahman(Bangla)</option>
              <option value="Saheeh International">
                Saheeh International(English)
              </option>
            </optgroup>
            <optgroup label="Others">
              <option value="Urdu">Urdu</option>
              <option value="Hindi">Hindi</option>
              <option value="Tamil">Tamil</option>
              <option value="Dutch">Dutch</option>
            </optgroup>
          </NativeSelect>
        </FormControl>
      </div>

      {/* Recitation */}
      <div className={classes.selectEachWrapper}>
        <Typography variant="body1" component="span">
          Recitation
        </Typography>

        <FormControl required className={classes.formControl}>
          <Select
            native
            value={ayaRecitation}
            onChange={handleChangeOnSelect}
            name="recitation"
            inputProps={{
              id: "recitation-native-required",
            }}
          >
            <option value="Mishr Al Afasy">Mishr Al Afasy</option>
            <option value="Omar Hisham Farabi">Omar Hisham Farabi</option>
            <option value="Hasan Gul">Hasan Gul</option>
          </Select>
        </FormControl>
      </div>
    </Box>
  );
};

export default SelectNav;
