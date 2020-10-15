import React, { useContext, useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { IndexContext } from "../../Context/IndexContext";
import {
  AppBar,
  Tabs,
  Tab,
  makeStyles,
  useTheme,
  Grid,
} from "@material-ui/core";
import TabPanel from "./TabPanel";
import MetaIndex from "./MetaIndex";
import SuraMeta from "./SuraMeta";

import suraList from "../SuraInfo/data/suraMeta.json";
import juzMeta from "./data/juzMeta.json";
import hizbMeta from "./data/hizbMeta.json";
import manzilsMeta from "./data/manzilsMeta.json";
import pageMeta from "./data/pageMeta.json";
import rukusMeta from "./data/rukusMeta.json";
import sajdasMeta from "./data/sajdasMeta.json";

const useStyles = makeStyles((theme) => ({
  secondaryLight: {
    backgroundColor: theme.palette.primary.light,
    zIndex: theme.zIndex.drawer - 1,
  },
  justifyCenter: {
    justifyContent: "center",
  },
}));

const metaItem = ["Sura", "Page", "Juz", "Ruku", "Hizb", "Manzil", "Sajda"];

const IndexTabs = () => {
  // const {
  //   tabValue,
  //   handleChangeTab,
  //   suraList,
  //   pageMeta,
  //   juzMeta,
  //   rukusMeta,
  //   hizbMeta,
  //   sajdasMeta,
  //   manzilsMeta,
  // } = useContext(IndexContext);
  const classes = useStyles();
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(metaItem[0]);

  const handleChangeTab = (value) => {
    setTabValue(value);
  };

  const handleChangeIndex = (index) => {
    setTabValue(index);
  };

  function a11yProps(index) {
    return {
      id: `quran-index-tab-${index}`,
      "aria-controls": `quran-index-tabpanel-${index}`,
    };
  }

  return (
    <>
      <AppBar position="sticky" className={classes.secondaryLight}>
        <Tabs
          value={tabValue}
          onChange={(e, value) => handleChangeTab(value)}
          // indicatorColor="primary"
          textColor="primary"
          aria-label="Tabs"
          variant="scrollable"
          scrollButtons="auto"
          className={classes.tabs}
        >
          {metaItem.map((item, i) => (
            <Tab
              key={`${item}-${i.toString()}`}
              index={i}
              label={item}
              value={item}
              {...a11yProps(item)}
            />
          ))}
        </Tabs>
      </AppBar>

      {/* <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={tabValue}
        onChangeIndex={handleChangeIndex}
      > */}
      {metaItem.map((item, i) => (
        <TabPanel
          key={i.toString()}
          value={tabValue}
          index={item}
          dir={theme.direction}
        >
          <Grid container spacing={5} justify="center">
            {item === "Sura" && <SuraMeta suraList={suraList.suras.sura} />}

            {item === "Page" && (
              <MetaIndex metaInfo={pageMeta.pages.page} metaItem="Page" />
            )}

            {item === "Juz" && (
              <MetaIndex metaInfo={juzMeta.juzs.juz} metaItem="Juz" />
            )}

            {item === "Hizb" && (
              <MetaIndex metaInfo={hizbMeta.hizbs.quarter} metaItem="Hizb" />
            )}

            {item === "Ruku" && (
              <MetaIndex metaInfo={rukusMeta.rukus.ruku} metaItem="Ruku" />
            )}

            {item === "Manzil" && (
              <MetaIndex
                metaInfo={manzilsMeta.manzils.manzil}
                metaItem="Manzil"
              />
            )}

            {item === "Sajda" && (
              <MetaIndex metaInfo={sajdasMeta.sajdas.sajda} metaItem="Sajda" />
            )}
          </Grid>
        </TabPanel>
      ))}
      {/* </SwipeableViews> */}
    </>
  );
};
export default IndexTabs;
