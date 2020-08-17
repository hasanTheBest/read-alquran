import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import reactHtmlParser from "react-html-parser";

// Font
// import MP_0001 from "./fonts/QCF_P001.woff2";

// const raleway = {
//   fontFamily: "Raleway",
//   src: `
//     local('Raleway'),
//     local('Raleway-Regular'),
//     url(${MP_0001}) format('woff2')
//   `,
// };

const styles = makeStyles((theme) => ({
  wordWrapper: {
    direction: "rtl",
    display: "flex",
    flexWrap: "wrap",
  },
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
  },

  textArabic: {
    fontFamily: "Uthman Hafs",
  },

  // TextMushaf: (props) => ({
  //   fontFamily: props.font,
  // }),

  TextMushaf: {
    fontFamily: "Mushaf Page",
  },
}));

const Words = ({ words }) => {
  // const props = { font: MP_0001 };
  const classes = styles();

  return (
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
                  className={classes.TextMushaf}
                >
                  {reactHtmlParser(code)}
                </Typography>

                {char_type === "word" && (
                  <>
                    {/* <span className={classes.textArabic}>{text && text}</span> */}

                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="span"
                    >
                      {Boolean(trans) && trans.bn}
                    </Typography>

                    {/* <Typography
                      variant="body1"
                      color="textSecondary"
                      component="span"
                    >
                      {Boolean(trans) && trans.trl}
                    </Typography> */}

                    {/* <Typography
                      variant="body1"
                      color="textSecondary"
                      component="span"
                    >
                      {Boolean(trans) && trans.en}
                    </Typography> */}
                  </>
                )}
              </Typography>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default Words;
