import React, { Fragment, useContext } from "react";
import { useLocation } from "react-router-dom";
import WebfontLoader from "@dr-kobros/react-webfont-loader";

// Context
import { SettingContext } from "../../Context/SettingsContext";
import { suraContext } from "../../Context/SuraContext";

// Material UI Components
import {
  makeStyles,
  Box,
  Container,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

// Data
import juzMeta from "../SuraIndex/data/juzMeta.json";
import suraList from "../SuraInfo/data/suraMeta.json";

// Components
import Words from "../Words/Words";
import Drawer from "../Header/Drawer/Drawer";
import { pageByPage } from "../../Helper/helper";
import PageMetaBarTop from "../Aya/PageMetaBarTop";
import PageMetaBarBottom from "../Aya/PageMetaBarBottom";

// Color
import tajweedStyle from "./TajweedStyle.css";
import teal from "@material-ui/core/colors/teal";
import borderClip from "./border.png";
import AyaWrapper from "./AyaWrapper";
import ReadingMode from "./ReadingMode";

const styles = makeStyles((theme) => ({
  maxWidthWrapper: {
    maxWidth: 890,
  },
  suraCompoWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& .MuiDrawer-paper": {
      position: "relative",
    },
  },

  container: {
    padding: "1.5rem 1rem",
    backgroundColor: theme.palette.background.paper,
    backgroundColor: teal[50],
    "&:nth-child(odd)": {
      backgroundColor: teal[100],
    },
  },

  pageContainer: (readingMode) => ({
    border: "1.5rem solid teal",
    width: "100%",
    borderImage: `url(${borderClip}) 30 repeat`,
    textAlign: readingMode ? "center" : "inherit",
  }),
  settingDrawerLgDown: {
    "& .MuiDrawer-paperAnchorRight": {
      left: `calc(50% + 445px)`,
      right: "auto",
    },
    "& .MuiDrawer-paper": {
      top: "auto",
      position: "absolute",
      zIndex: theme.zIndex.appBar - 100,
      marginTop: "3.8rem",
    },
  },
}));

const Aya = () => {
  const { showWbw, selectItemFont, readingMode } = useContext(SettingContext);

  const { sura, suraId, ayaCount, ayaId } = useContext(suraContext);

  const theme = useTheme();
  const breakUp1440 = useMediaQuery(theme.breakpoints.up(1440));
  const classes = styles(readingMode);

  const { pages, webFontConfig } = pageByPage(sura, suraId, ayaCount, ayaId);

  let { pathname } = useLocation();

  let families = ["Uthamanic Hafs"];
  families.push(selectItemFont);

  return (
    <>
      {breakUp1440 && (
        <div className={classes.settingDrawerLgDown}>
          {pathname.startsWith("/sura") && <Drawer />}
        </div>
      )}

      <div className={classes.suraCompoWrapper}>
        <WebfontLoader
          config={{
            custom: {
              families: families,
            },
          }}
        >
          <>
            {pages[0] &&
              pages.map((page, pageIndex) => {
                return (
                  <WebfontLoader config={webFontConfig} key={String(pageIndex)}>
                    <Container className={classes.maxWidthWrapper}>
                      <PageMetaBarTop
                        props={{
                          juzMeta,
                          pages,
                          suraList,
                          pageIndex,
                          suraId: Number(suraId),
                        }}
                      />

                      <Box className={classes.pageContainer}>
                        {page.map(
                          ({
                            a_id,
                            verse_key,
                            text,
                            page,
                            words,
                            tajweed,
                            translation,
                          }) => {
                            const ayaNum = Number(verse_key.split(":")[1]);

                            return (
                              <Fragment key={String(a_id)}>
                                {!readingMode ? (
                                  <div className={classes.container}>
                                    {/* Words */}
                                    {showWbw &&
                                    selectItemFont === "Old Madina Mushaf" ? (
                                      <Words
                                        props={{
                                          ayaNum,
                                          words,
                                          mushafFont: `QCF_P${String(
                                            page
                                          ).padStart(3, 0)}`,
                                        }}
                                      />
                                    ) : (
                                      <Words
                                        props={{
                                          ayaNum,
                                          words,
                                          mushafFont: null,
                                        }}
                                      />
                                    )}

                                    <AyaWrapper
                                      props={{
                                        text,
                                        tajweed,
                                        ayaNum,
                                        words,
                                        page,
                                        translation,
                                      }}
                                    />
                                  </div>
                                ) : (
                                  <ReadingMode
                                    props={{
                                      text,
                                      tajweedRule: tajweed,
                                      index: ayaNum,
                                    }}
                                  />
                                )}
                              </Fragment>
                            );
                          }
                        )}
                      </Box>

                      <PageMetaBarBottom
                        props={{ suraList, suraId: Number(suraId) }}
                      />
                    </Container>
                  </WebfontLoader>
                );
              })}
          </>
        </WebfontLoader>
      </div>
    </>
  );
};

export default Aya;
