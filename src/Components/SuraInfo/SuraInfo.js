import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

import suraMeta from "../SuraInfo/data/suraMeta.json";
import Bismillah from "./Bismillah";
import SelectSura from "./SelectSura";
import ExploreSuraMeta from "./ExploreSuraMeta";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: "2rem",
  },
  bannerSuraInfo: {
    width: "100%",
    height: 230,
    position: "relative",
    background: theme.palette.primary.light,
    marginTop: 64,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  goto: {
    marginTop: "1.5rem",
    textAlign: "center",
    "& .MuiFormControl-root": {
      verticalAlign: "bottom",
    },
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

// Select Aya
const SelectAya = ({ aya }) => {
  const classes = useStyles();
  const [ayaValue, setAyaValue] = useState(0);

  let optionsAya = [];

  for (let i = 1; i <= aya; i++) {
    optionsAya = [
      ...optionsAya,
      <MenuItem value={i} className={classes.link}>
        {i}
      </MenuItem>,
    ];
  }

  const handleChangeAya = (e) => setAyaValue(e.target.value);

  // moves the menu below the select input
  const menuProps = {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  return (
    <FormControl>
      <Select MenuProps={menuProps} value={ayaValue} onChange={handleChangeAya}>
        <MenuItem value={0} className={classes.link}>
          AYA
        </MenuItem>
        {optionsAya}
      </Select>
    </FormControl>
  );
};

// Sura info
const SuraInfo = ({ suraId }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.bannerSuraInfo}>
        <ExploreSuraMeta info={suraMeta.suras.sura} id={suraId} />

        <div className={classes.goto}>
          <SelectSura suraList={suraMeta.suras.sura} />
          <SelectAya aya={suraMeta.suras.sura[suraId - 1].ayas} />
        </div>
      </div>

      {Number(suraId) !== 1 && Number(suraId) !== 9 && <Bismillah />}
    </>
  );
};
export default SuraInfo;
