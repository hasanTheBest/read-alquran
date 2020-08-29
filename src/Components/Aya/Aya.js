import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import WebfontLoader from "@dr-kobros/react-webfont-loader";
import reactHtmlParser from "react-html-parser";
import { makeStyles, Typography, Hidden } from "@material-ui/core";
import { SettingContext } from "../../Context/SettingsContext";
import { suraContext } from "../../Context/SuraContext";

// Color
import tajweedStyle from "./TajweedStyle.css";
import teal from "@material-ui/core/colors/teal";
import borderClip from "./border.png";

// Components
// import trBn from "./trans/bn/1.json";
// import trEn from "./trans/en/1.json";
// import trlEn from "./trans/trl/1.json";

import Words from "../Words/Words";
import AyaArabic from "./AyaArabic";
import Drawer from "../Header/Drawer/Drawer";
import { pageByPage } from "../../Helper/helper";

const styles = makeStyles((theme) => ({
  suraCompoWrapper: {
    display: "flex",
    justifyContent: "center",
    "& .MuiDrawer-paper": {
      position: "relative",
    },
  },
  container: {
    fontFamily: "Uthman Hafs",
    maxWidth: 700,
    width: "100%",
    // margin: "0 auto",
    padding: "1.5rem 1rem",
    // border: `2px solid ${theme.palette.primary.light}`,
    // borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    backgroundColor: teal[50],
    "&:nth-child(odd)": {
      backgroundColor: teal[100],
    },
  },

  pageContainer: {
    border: ".5rem solid transparent",
    width: "100%",
    maxWidth: 700,
    borderImage: `url(${borderClip}) 30 stretch`,
    // margin: "1rem auto",
    padding: ".8rem",
  },

  endAyah: {
    display: "inline",
    position: "relative",
    marginRight: "10px",
  },
  ayahSign: {
    fontFamily: "inherit",
  },

  ayahNumber: {
    display: "inline",
    position: "absolute",
    top: "50%",
    left: "50%",
    fontFamily: "inherit",
    // fontSize: "12px",
    transform: "translate(-50%, -40%)",
  },

  transBn: {
    fontSize: ({ fontSizeTranslation }) => fontSizeTranslation,
    letterSpacing: 1,
    padding: ".5rem",
  },
  ayaWrodTextWrapper: {
    direction: "rtl",
    textAlign: "right",
    paddingTop: ".5rem",
  },
  ayaWordText: {
    fontSize: ({ fontSizeArabic }) => fontSizeArabic,
    display: "inline-block",
    lineHeight: 1.6,
  },
}));

const Aya = () => {
  const {
    sura,
    suraId,
    ayaCount,
    ayaId,
    trBn,
    trEn,
    trlEn,
    tajweed,
    textAr,
  } = useContext(suraContext);
  const {
    showWbw,
    showAya,
    showTranslation,
    showTransliteration,
    showTajweed,
    fontSizeTranslation,
    fontSizeArabic,
    selectItemFont,
    ayaTranslation,
  } = useContext(SettingContext);

  const classes = styles({ fontSizeTranslation, fontSizeArabic });

  const { pages, webFontConfig, webFontStatus, fontStatus } = pageByPage(
    sura,
    suraId,
    ayaCount,
    ayaId
  );

  let { pathname } = useLocation();

  let [families, urls] = [["Uthmanic Hafs"], [`/fonts/aya/custom-font.css`]];
  families.push(selectItemFont);
  // let [families, urls] = [["Uthmanic Hafs"], [`/fonts/aya/Uthmanic-Hafs.css`]];
  // urls.push(`/fonts/aya/${selectItemFont.trim().split(" ").join("-")}.css`);

  return (
    <div className={classes.suraCompoWrapper}>
      <div>
        <Hidden className="custom-brk" mdDown>
          {pathname.startsWith("/sura") && <Drawer />}
        </Hidden>
      </div>
      <div>
        <WebfontLoader
          config={{
            custom: {
              families: families,
              urls: urls,
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
                  <div className={classes.pageContainer}>
                    {page.map(
                      (
                        {
                          a_id,
                          verse_key,
                          text,
                          sajdah,
                          s_type,
                          juz,
                          rub,
                          page,
                          words,
                        },
                        i
                      ) => {
                        return (
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
                                <div className={classes.ayaWrodTextWrapper}>
                                  {words.map(({ id, code }) => (
                                    <Typography
                                      variant="h3"
                                      component="b"
                                      className={classes.ayaWordText}
                                      style={{
                                        fontFamily: `QCF_P${String(
                                          page
                                        ).padStart(3, 0)}`,
                                      }}
                                      key={String(id)}
                                    >
                                      {reactHtmlParser(code)}
                                    </Typography>
                                  ))}
                                </div>
                              )}

                              {/* Transliteration */}
                              {showTransliteration && (
                                <Typography
                                  variant="body1"
                                  color="textSecondary"
                                  component="p"
                                  className={classes.transBn}
                                >
                                  <span>
                                    {Number(
                                      verse_key.split(":")[1]
                                    ).toLocaleString("en")}{" "}
                                    .{" "}
                                  </span>
                                  {Boolean(trlEn) && trlEn.aya[i].text}
                                </Typography>
                              )}

                              {/* Translation*/}
                              {showTranslation && (
                                <>
                                  {"Mojibor Rahman" === ayaTranslation ? (
                                    <Typography
                                      variant="body1"
                                      color="textSecondary"
                                      component="p"
                                      className={classes.transBn}
                                    >
                                      <span>
                                        {Number(
                                          verse_key.split(":")[1]
                                        ).toLocaleString("bn")}{" "}
                                        |{" "}
                                      </span>
                                      {
                                        trBn.aya[verse_key.split(":")[1] - 1]
                                          .text
                                      }
                                    </Typography>
                                  ) : (
                                    <Typography
                                      variant="body1"
                                      color="textSecondary"
                                      component="p"
                                      className={classes.transBn}
                                    >
                                      <span>
                                        {Number(
                                          verse_key.split(":")[1]
                                        ).toLocaleString("en")}{" "}
                                        .{" "}
                                      </span>
                                      {Boolean(trEn.aya) && trEn.aya[i].text}
                                    </Typography>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </WebfontLoader>
              );
            })}
        </WebfontLoader>
      </div>
    </div>
  );
};

export default Aya;
