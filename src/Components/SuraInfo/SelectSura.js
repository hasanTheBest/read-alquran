import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  FormControl,
  Link,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  selectSura: {
    minWidth: 200,
    maxWidth: 300,
    marginRight: "1.7rem",
  },
  link: {
    width: "100%",
    dispaly: "block",
    "&:hover": {
      textDecoration: "none",
    },
  },

  pMetaBarItemTopRight: {
    display: "flex",
    justifyContent: "space-between",
    "& .s_name": {
      ...theme.typography.h4,
    },
  },
  indexAndTname: {
    display: "flex",
  },
  SuraNameTopRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginRight: ".3rem",
    lineHeight: 1,
  },
  suraNumPadding: {
    paddingRight: ".8rem",
  },
}));

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

const SelectSura = ({ suraList }) => {
  const classes = useStyles();
  const [val, setVal] = useState(0);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const items = suraList.map(({ index, tname, ename, ayas }) => (
    <MenuItem value={index} key={index}>
      <Link
        component={RouterLink}
        to={`${index}`}
        className={classes.link}
        color="inherit"
      >
        <Typography
          variant="h6"
          component="div"
          className={classes.pMetaBarItemTopRight}
          noWrap
        >
          <div className={classes.indexAndTname}>
            <Typography
              variant="body1"
              component="div"
              className={classes.suraNumPadding}
            >
              {index}
              {". "}
            </Typography>
            <Typography
              variant="subtitle2"
              component="div"
              className={classes.SuraNameTopRight}
            >
              <span>{`${tname} (${ayas})`}</span>
              <span>{ename}</span>
            </Typography>
          </div>

          <span className={`s_name raq raq-surah${index}`}></span>
        </Typography>
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

export default SelectSura;
