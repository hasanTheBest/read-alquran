import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  FormControl,
  Select,
  InputLabel,
  Link,
  MenuItem,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import suraMeta from "../SuraInfo/data/suraMeta.json";
import Bismillah from "./Bismillah";

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

  nameArabic: {
    direction: "rtl",
  },

  goto: {
    marginTop: "1.5rem",
    textAlign: "center",
  },
  selectSura: {
    width: 200,
    marginRight: "1.7rem",
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

// Sura Meta
const ExploreSuraMeta = ({ info, id }) => {
  const classes = useStyles();
  const { index, ayas, start, name, tname, ename, type, order, rukus } = info[
    id - 1
  ];

  return (
    <>
      <Typography variant="h2" className={classes.nameArabic}>
        <span>{Number(index).toLocaleString("ar-EG")}</span>
        {name}
      </Typography>

      <Typography variant="h6">
        {index}
        {". "}
        {tname.toUpperCase()} - {ename}
      </Typography>

      <Typography variant="body1">
        <b>
          {ayas}
          {"  "}
        </b>
        Ayas,{" "}
        <b>
          {rukus}
          {"  "}
        </b>
        Rukus, Type <b>{type}</b>
      </Typography>
    </>
  );
};

// Select Sura
const SelectSura = ({ suraList }) => {
  const classes = useStyles();
  const [val, setVal] = useState(0);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

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

  const items = suraList.map(({ index, name, tname, ayas }) => (
    <MenuItem value={index} key={index}>
      <Link component={RouterLink} to={`${index}`} className={classes.link}>
        {index}. {tname}({ayas}) {name}
      </Link>
    </MenuItem>
  ));

  return (
    <FormControl className={classes.selectSura}>
      <Select MenuProps={menuProps} value={val} onChange={handleChange}>
        <MenuItem value={0}>SURA</MenuItem>
        {items}
      </Select>
    </FormControl>
  );
};

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
          {/* <SelectSura2 suraList={suraMeta.suras.sura} /> */}
          {/* <SelectAya aya={suraMeta.suras.sura[suraId - 1].ayas} /> */}
        </div>
      </div>

      {Number(suraId) !== 1 && Number(suraId) !== 9 && <Bismillah />}
    </>
  );
};

const SelectSura2 = ({ suraList }) => {
  const classes = useStyles();
  const [chapter, setChapter] = useState({ name: "", id: 0 });

  const handleChangeSura = (e) => {
    const name = e.target.name;
    setChapter({
      ...chapter,
      [name]: e.target.value,
    });
  };

  const optionsSura = suraList.map(({ index, name, tname, ayas }) => (
    <option value={index} key={index}>
      {index}. {tname}({ayas}) {name}
      {/* <Link component={RouterLink} to={`sura/${index}`}>
      </Link> */}
    </option>
  ));

  return (
    <FormControl className={classes.formControl}>
      {/* <InputLabel htmlFor="filled-sura-native-simple">Sura</InputLabel> */}
      <Select
        native
        value={chapter.id}
        onChange={(e) => handleChangeSura(e)}
        inputProps={{
          name: "sura",
          id: "filled-sura-native-simple",
        }}
      >
        <option aria-label="None" value={0}>
          Sura
        </option>
        {optionsSura}
      </Select>
    </FormControl>
  );
};

const SelectAya2 = ({ aya }) => {
  const classes = useStyles();
  const [ayaValue, setAyaValue] = useState(0);

  let optionsAya = [];

  for (let i = 1; i <= aya; i++) {
    optionsAya = [...optionsAya, <option value={i}>{i}</option>];
  }

  const handleChangeAya = (e) => setAyaValue(e.target.value);

  return (
    <FormControl className={classes.formControl}>
      {/* <InputLabel htmlFor="filled-aya-native-simple">Aya</InputLabel> */}
      <Select
        native
        value={ayaValue}
        onChange={(e) => handleChangeAya(e)}
        inputProps={{
          name: "aya",
          id: "filled-aya-native-simple",
        }}
      >
        <option aria-label="None" value={0}>
          Aya
        </option>
        {optionsAya}
      </Select>
    </FormControl>
  );
};
export default SuraInfo;
