import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bismillah: {
    textAlign: "center",
    direction: "rtl",
  },
}));

const Bismillah = () => {
  const classes = useStyles();

  return (
    <div className={classes.bismillahWrapper}>
      <Typography className={classes.bismillah} variant="h4" component="p">
        بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
      </Typography>
    </div>
  );
};

export default Bismillah;
