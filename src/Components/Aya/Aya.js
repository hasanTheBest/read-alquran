import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import WebfontLoader from "@dr-kobros/react-webfont-loader";

// Context
import { SettingContext } from "../../Context/SettingsContext";
import { suraContext } from "../../Context/SuraContext";
import { IndexContext } from "../../Context/IndexContext";

// Material UI Components
import { makeStyles, Hidden, Box, Container } from "@material-ui/core";

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

  // const { suraList, juzMeta } = useContext(IndexContext);

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
    <div className={classes.suraCompoWrapper}>
      <div className={classes.mdUpDrawerAside}>
        <Hidden className="custom-brk" mdDown>
          {pathname.startsWith("/sura") && <Drawer />}
        </Hidden>
      </div>

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
                <Container maxWidth="md">
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
  );
};

export default Aya;
