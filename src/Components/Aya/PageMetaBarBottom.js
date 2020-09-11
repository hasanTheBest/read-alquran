import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Tooltip, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageMetaBar: {
    display: "flex",
    justifyContent: "space-between",
    "& .s_name": {
      ...theme.typography.h4,
    },
  },
  suraNameAnchor: {
    display: "flex",
    "& div": {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1,
    },
    "&:hover": {
      textDecoration: "none",
    },
  },
  suraNameAnchorLeft: {
    marginLeft: ".5rem",
  },
  suraNameAnchorRight: {
    alignItems: "flex-end",
  },
}));

const PageMetaBarBottom = ({ pages, suraList, pageIndex }) => {
  const classes = useStyles();

  return (
    <Box pt={1} pb={3} className={classes.pageMetaBar}>
      <Tooltip
        title={`Go to previous Sura ${
          Number(pages[0][0].verse_key.split(":")[0]) - 1
        }: ${
          suraList.suras.sura[Number(pages[0][0].verse_key.split(":")[0]) - 2]
            .tname
        } (ayas: ${
          suraList.suras.sura[Number(pages[0][0].verse_key.split(":")[0]) - 2]
            .ayas
        })`}
      >
        <Typography variant="subtitle2">
          <Link
            to={`/sura/${Number(pages[0][0].verse_key.split(":")[0]) - 1}`}
            component={RouterLink}
            className={classes.suraNameAnchor}
          >
            <span
              className={`s_name raq raq-surah${
                Number(pages[0][0].verse_key.split(":")[0]) - 1
              }`}
            ></span>
            <div className={classes.suraNameAnchorLeft}>
              <span>
                {
                  suraList.suras.sura[
                    Number(pages[0][0].verse_key.split(":")[0]) - 2
                  ].ename
                }
              </span>
              <span>
                {pages[0][0].verse_key.split(":")[0] !== "1" &&
                  `${Number(pages[0][0].verse_key.split(":")[0]) - 1}. ${
                    suraList.suras.sura[
                      Number(pages[0][0].verse_key.split(":")[0]) - 2
                    ].tname
                  }`}
              </span>
            </div>
          </Link>
        </Typography>
      </Tooltip>

      <Tooltip
        title={`Go to next Sura ${
          Number(pages[0][0].verse_key.split(":")[0]) + 1
        }: ${
          suraList.suras.sura[Number(pages[0][0].verse_key.split(":")[0])].tname
        } (ayas: ${
          suraList.suras.sura[Number(pages[0][0].verse_key.split(":")[0])].ayas
        })`}
      >
        <Typography variant="subtitle2">
          <Link
            to={`/sura/${Number(pages[0][0].verse_key.split(":")[0]) + 1}`}
            component={RouterLink}
            className={classes.suraNameAnchor}
          >
            <div className={classes.suraNameAnchorRight}>
              <span>
                {
                  suraList.suras.sura[
                    Number(pages[0][0].verse_key.split(":")[0])
                  ].ename
                }
              </span>
              <span>
                {pages[0][0].verse_key.split(":")[0] !== "114" &&
                  `${Number(pages[0][0].verse_key.split(":")[0]) + 1}. ${
                    suraList.suras.sura[
                      Number(pages[0][0].verse_key.split(":")[0])
                    ].tname
                  }`}
              </span>
            </div>
            <span
              className={`s_name raq raq-surah${
                Number(pages[0][0].verse_key.split(":")[0]) + 1
              }`}
            ></span>
          </Link>
        </Typography>
      </Tooltip>
    </Box>
  );
};

export default PageMetaBarBottom;
