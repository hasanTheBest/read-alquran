import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import reactHtmlParser from "react-html-parser";
import { SettingContext } from "../../Context/SettingsContext";

const styles = makeStyles((theme) => ({
  wordWrapper: { direction: "rtl", display: "flex", flexWrap: "wrap" },
  word: {
    display: "inline-flex",
    textAlign: "center",
    marginRight: ".8rem",
    flexDirection: "column",
    borderRadius: ".5rem",
    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
      padding: ".5rem",
      marginRight: ".5rem",
    },
    "&:last-child": {
      marginTop: ".6rem",
    },
  },

  textArabic: {
    fontFamily: "Uthman Hafs",
  },

  TextWord: ({ mushafFont, fontSizeArabic, selectItemFont }) => ({
    fontFamily:
      selectItemFont === "Old Madina Mushaf" ? mushafFont : selectItemFont,
    fontSize: fontSizeArabic,
  }),

  wordTranslation: ({ fontSizeTranslation }) => ({
    fontSize: fontSizeTranslation,
  }),
}));

const Words = ({ words, mushafFont, ayaNum }) => {
  const {
    showWbwTransliteration,
    showWbwTranslation,
    fontSizeArabic,
    fontSizeTranslation,
    selectItemFont,
  } = React.useContext(SettingContext);
  const classes = styles({
    mushafFont,
    fontSizeArabic,
    fontSizeTranslation,
    selectItemFont,
  });

  return (
    <>
      <div className={classes.wordWrapper}>
        {words &&
          words.map((word) => {
            const { text, id, char_type, code } = word;
            const trans = Boolean(word.translation) ? word.translation : null;

            return (
              <React.Fragment key={id}>
                {/* {char_type === "word" && char_type !== "end" && ( */}
                <Typography
                  variant="h5"
                  color="textPrimary"
                  component="div"
                  className={classes.word}
                >
                  <Typography
                    variant="h3"
                    component="b"
                    className={classes.TextWord}
                  >
                    {mushafFont ? reactHtmlParser(code) : text}
                  </Typography>

                  {char_type === "word" && (
                    <>
                      {/* <span className={classes.textArabic}>{text && text}</span> */}

                      {showWbwTranslation && (
                        <>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            component="span"
                            className={classes.wordTranslation}
                          >
                            {Boolean(trans) && trans.bn}
                          </Typography>

                          {/* <Typography
                      variant="body1"
                      color="textSecondary"
                      component="span"
                    >
                      {Boolean(trans) && trans.en}
                    </Typography> */}
                        </>
                      )}

                      {showWbwTransliteration && (
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="span"
                        >
                          {Boolean(trans) && trans.trl}
                        </Typography>
                      )}
                    </>
                  )}
                </Typography>
              </React.Fragment>
            );
          })}
        <Typography
          variant="h5"
          color="textPrimary"
          component="div"
          className={classes.word}
        >
          <Typography variant="h3" component="b" className={classes.TextWord}>
            {ayaNum.toLocaleString("ar-EG")}
          </Typography>
        </Typography>
      </div>
    </>
  );
};

export default Words;
