import React, { useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
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

const styles = makeStyles((theme) => ({
  container: {
    fontFamily: "Uthman Hafs",
    maxWidth: 700,
    margin: "0 auto",
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
    margin: "1rem auto",
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
    fontSize: "1.2rem",
    letterSpacing: 1,
    padding: ".5rem",
  },
}));

const Aya = () => {
  const classes = styles();
  const value = useContext(suraContext);
  let { sura, suraId, ayaCount, ayaId, trBn, tajweed, textAr } = value;

  let pages = [];
  let p1 = sura.aya[ayaId - 1] && sura.aya[ayaId - 1].page;
  const pLast = sura.aya[ayaCount - 1] && sura.aya[ayaCount - 1].page;

  // If verse_key present
  if (ayaId) {
    sura.aya2 = sura.aya.slice(ayaId - 1);
  }

  // Divide into page
  while (p1 <= pLast) {
    let ayaNum = sura.aya[0].verse_key;
    ayaNum = Number(ayaNum.split(":")[1]);

    let p =
      Boolean(p1) && ayaId === ayaNum
        ? sura.aya
            .filter(
              ({ page, verse_key }) =>
                p1 === page && suraId.suraId === verse_key.split(":")[0]
            )
            .map((v) => v)
        : sura.aya2
            .filter(
              ({ page, verse_key }) =>
                p1 === page && suraId.suraId === verse_key.split(":")[0]
            )
            .map((v) => v);

    pages = [...pages, p];
    p1++;
  }

  // console.log("Aya -> pages", pages);

  return (
    <>
      {pages[0] &&
        pages.map((page, i) => {
          return (
            <div className={classes.pageContainer} id={`page-${i + 1}`}>
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
                    <div key={a_id.toString()} className={classes.container}>
                      {/* Words */}
                      <Words words={words} />

                      <div className={classes.ayaWrapper}>
                        {/* Aya Arabic */}
                        <AyaArabic
                          tajweedRule={
                            tajweed.aya[Number(verse_key.split(":")[1] - 1)]
                          }
                          text={
                            textAr.aya[Number(verse_key.split(":")[1]) - 1]
                              ._text
                          }
                          index={Number(verse_key.split(":")[1])}
                        />

                        {/* Translation Bn */}
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="p"
                          color="textSecondary"
                          className={classes.transBn}
                        >
                          <span>
                            {Number(verse_key.split(":")[1]).toLocaleString(
                              "bn"
                            )}{" "}
                            |{" "}
                          </span>
                          {trBn.aya[verse_key.split(":")[1] - 1].text}
                        </Typography>

                        {/* Transliteration */}
                        {/* <Typography variant="body1" color="textSecondary" component="p">
                  <span>{a_id.toLocaleString("en")} | </span>
                  {Boolean(trlEn.aya) && trlEn.aya[i].text}
                </Typography> */}

                        {/* Translation En */}
                        {/* <Typography variant="body1" color="textSecondary" component="p">
                  <span>{a_id.toLocaleString("en")} | </span>
                  {Boolean(trEn.aya) && trEn.aya[i].text}
                </Typography> */}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          );
        })}
    </>
  );
};

export default Aya;
