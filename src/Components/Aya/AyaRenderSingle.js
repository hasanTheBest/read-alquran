import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import { SettingContext } from "../../Context/SettingsContext";
import Words from "../Words/Words";
import AyaWrapper from "./AyaWrapper";
import ReadingMode from "./ReadingMode";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "1.5rem 1rem",
    backgroundColor: theme.palette.background.paper,
    backgroundColor: teal[50],
    "&:nth-child(odd)": {
      backgroundColor: teal[100],
    },
  },
}));

const AyaRenderSingle = ({
  content: { a_id, verse_key, text, page, words, tajweed, translation },
}) => {
  const { showWbw, selectItemFont, readingMode } = useContext(SettingContext);
  const ayaNum = Number(verse_key.split(":")[1]);
  const classes = useStyles();

  return (
    <>
      {!readingMode ? (
        <div className={classes.container}>
          {showWbw && selectItemFont === "Old Madina Mushaf" ? (
            <Words
              props={{
                ayaNum,
                words,
                mushafFont: `QCF_P${String(page).padStart(3, 0)}`,
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
    </>
  );
};

export default AyaRenderSingle;
