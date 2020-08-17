import React from "react";
import { Grid, Container, makeStyles } from "@material-ui/core";
import IndexTabs from "./IndexTabs";

const useStyles = makeStyles((theme) => ({
  suraIndexContainer: {
    padding: "0 0 3rem 0",
  },
}));

const Index = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.suraIndexContainer}>
      <IndexTabs />
    </Container>
  );
};

export default Index;
