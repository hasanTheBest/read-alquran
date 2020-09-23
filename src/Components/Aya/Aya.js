import React, { useContext } from "react";
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
import AyaArabic from "./AyaArabic";
import Drawer from "../Header/Drawer/Drawer";
import { pageByPage } from "../../Helper/helper";
import PageMetaBarTop from "../Aya/PageMetaBarTop";
import PageMetaBarBottom from "../Aya/PageMetaBarBottom";
import AyaTransliteration from "./trans/AyaTransliteration";
import AyaTranslation from "./trans/AyaTranslation";
import GenerateAyaFromWords from "./GenerateAyaFromWords";

// Color
import tajweedStyle from "./TajweedStyle.css";
import teal from "@material-ui/core/colors/teal";
import borderClip from "./border.png";

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

  pageContainer: {
    border: "1.5rem solid teal",
    width: "100%",
    borderImage: `url(${borderClip}) 30 repeat`,
  },
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
  const {
    showWbw,
    showAya,
    showTranslation,
    showTransliteration,
    showTajweed,
    fontSizeArabic,
    selectItemFont,
  } = useContext(SettingContext);
  const { sura, suraId, ayaCount, ayaId, tajweed, textAr } = useContext(
    suraContext
  );

  const theme = useTheme();
  const breakUp1440 = useMediaQuery(theme.breakpoints.up(1440));
  const classes = styles({ fontSizeArabic });

  const { pages, webFontConfig, webFontStatus, fontStatus } = pageByPage(
    sura,
    suraId,
    ayaCount,
    ayaId
  );

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
          {pages[0] &&
            pages.map((page, pageIndex) => {
              return (
                <WebfontLoader
                  config={webFontConfig}
                  onStatus={webFontStatus}
                  onFontStatus={fontStatus}
                >
                  <Container className={classes.maxWidthWrapper}>
                    <PageMetaBarTop
                      juzMeta={juzMeta}
                      pages={pages}
                      suraList={suraList}
                      pageIndex={pageIndex}
                    />

                    <Box className={classes.pageContainer}>
                      {page.map(({ a_id, verse_key, text, page, words }) => {
                        return (
                          <>
                            <div
                              key={a_id.toString()}
                              className={classes.container}
                            >
                              {/* Words */}
                              {showWbw &&
                              selectItemFont === "Old Madina Mushaf" ? (
                                <Words
                                  ayaNum={Number(verse_key.split(":")[1])}
                                  words={words}
                                  mushafFont={`QCF_P${String(page).padStart(
                                    3,
                                    0
                                  )}`}
                                />
                              ) : (
                                <Words
                                  ayaNum={Number(verse_key.split(":")[1])}
                                  words={words}
                                  mushafFont={null}
                                />
                              )}

                              <div className={classes.ayaWrapper}>
                                {/* Aya Arabic */}
                                {showAya &&
                                  "Old Madina Mushaf" !== selectItemFont &&
                                  (showTajweed ? (
                                    <AyaArabic
                                      tajweedRule={
                                        tajweed.aya[
                                          Number(verse_key.split(":")[1] - 1)
                                        ]
                                      }
                                      text={
                                        textAr.aya[
                                          Number(verse_key.split(":")[1]) - 1
                                        ]._text
                                      }
                                      index={Number(verse_key.split(":")[1])}
                                    />
                                  ) : (
                                    <AyaArabic
                                      tajweedRule={null}
                                      text={text}
                                      index={Number(verse_key.split(":")[1])}
                                    />
                                  ))}

                                {/*Aya for Old Madina Mushaf */}
                                {selectItemFont === "Old Madina Mushaf" && (
                                  <GenerateAyaFromWords
                                    words={words}
                                    page={page}
                                  />
                                )}

                                {/* Transliteration */}
                                {showTransliteration && (
                                  <AyaTransliteration
                                    ayaNum={Number(verse_key.split(":")[1])}
                                  />
                                )}

                                {/* Translation*/}
                                {showTranslation && (
                                  <AyaTranslation
                                    ayaNum={Number(verse_key.split(":")[1])}
                                  />
                                )}
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </Box>

                    <PageMetaBarBottom
                      pages={pages}
                      pageIndex={pageIndex}
                      suraList={suraList}
                    />
                  </Container>
                </WebfontLoader>
              );
            })}
        </WebfontLoader>
      </div>
    </>
  );
};

export default Aya;
