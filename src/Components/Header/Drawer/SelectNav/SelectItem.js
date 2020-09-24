import React from "react";
import { FormControl, makeStyles, Select, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  selectEachWrapper: {
    display: "flex",
    flexDirection: "column",
    "&:not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    marginLeft: 0,
    minWidth: 120,
  },
}));

const SelectItem = ({
  itemName,
  selectItemName,
  selectItemValue,
  handleChangeSelectItem,
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.selectEachWrapper}>
      <Typography variant="body1" component="span">
        {itemName}
      </Typography>

      <FormControl required className={classes.formControl}>
        <Select
          native
          value={selectItemValue}
          onChange={handleChangeSelectItem}
          name={selectItemName}
          inputProps={{
            id: "font-native-required",
          }}
        >
          {children}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectItem;
