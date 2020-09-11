import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bismillah: {
    textAlign: "center",
  },
}));

const Bismillah = () => {
  const classes = useStyles();

  return (
    <Box px={2} py={3}>
      <Typography className={classes.bismillah} variant="h2" component="p">
        <span className="raq raq-bismallah"></span>
        {/* بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ */}
      </Typography>
    </Box>
  );
};

export default Bismillah;
