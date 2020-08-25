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
    selectItemRecitation,
    selectItemTranslation,
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
            <optgroup label="Word">
              <option value="Old Madina Mushaf">Old Madina Mushaf</option>
            </optgroup>
            <optgroup label="Aya">
              <option value="Nafees Nastaleeq">Nafees Nastaleeq</option>
              <option value="Noore Hidayat">Noore Hidayat</option>
              <option value="me_quran">me_quran</option>
              <option value="Uthmanic Hafs">Uthmanic Hafs</option>
              <option value="Uthmanic TN">Uthmanic TN</option>
            </optgroup>
          </Select>
        </FormControl>
      </div>

      <div className={classes.selectEachWrapper}>
        <Typography variant="body1" component="span">
          Recitation
        </Typography>

        <FormControl required className={classes.formControl}>
          <Select
            native
            value={selectItemRecitation}
            onChange={handleChangeOnSelect}
            name="recitation"
            inputProps={{
              id: "recitation-native-required",
            }}
          >
            <option value={10}>TenTenTenTenTenTenTen</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </Select>
        </FormControl>
      </div>

      <div className={classes.selectEachWrapper}>
        <Typography variant="body1" component="span">
          Translation
        </Typography>

        <FormControl required className={classes.formControl}>
          <NativeSelect
            native
            value={selectItemTranslation}
            onChange={handleChangeOnSelect}
            name="translation"
            inputProps={{
              id: "translation-native-required",
            }}
          >
            <optgroup label="Default">
              <option value={10}>TenTenTenTenTenTenTen</option>
            </optgroup>
            <optgroup label="Others">
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </optgroup>
          </NativeSelect>
        </FormControl>
      </div>
    </Box>
  );
};

export default SelectNav;
