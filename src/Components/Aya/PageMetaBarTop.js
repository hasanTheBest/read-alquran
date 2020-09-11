import React from "react";
import { Box, Typography, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageMetaBar: {
    display: "flex",
    justifyContent: "space-between",
    "& .s_name": {
      ...theme.typography.h4,
    },
  },

  pMetaBarItemJuz: {
    fontFamily: "me_quran",
    "& .juzNumber": {
      fontFamily: "initial",
    },
  },
  pMetaBarItemTopRight: {
    display: "flex",
  },
  SuraNameTopRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: ".3rem",
    lineHeight: 1,
  },
}));

const PageMetaBarTop = ({ juzMeta, pages, pageIndex, suraList }) => {
  const classes = useStyles();

  return (
    <Box pt={2} pb={1} className={classes.pageMetaBar}>
      <Tooltip
        title={`Juz: ${pages[pageIndex][0].juz}, sura ${
          juzMeta.juzs.juz[pages[pageIndex][0].juz - 1].sura
        }: ${juzMeta.juzs.juz[pages[pageIndex][0].juz - 1].tname} (${
          juzMeta.juzs.juz[pages[pageIndex][0].juz - 1].ename
        }), aya: ${juzMeta.juzs.juz[pages[pageIndex][0].juz - 1].aya}`}
      >
        <Typography
          variant="h5"
          component="b"
          className={classes.pMetaBarItemJuz}
          noWrap
        >
          <span className="juzNumber">
            {/* {Number(
              juzMeta.juzs.juz[pages[pageIndex][0].juz - 1].index
            ).toLocaleString("ar-EG")}{" "} */}
          </span>
          {juzMeta.juzs.juz[pages[pageIndex][0].juz - 1].text.split(" ")[0]}{" "}
          {juzMeta.juzs.juz[pages[pageIndex][0].juz - 1].text.split(" ")[1]}
        </Typography>
      </Tooltip>

      <Tooltip title="Page">
        <Typography
          variant="body1"
          component="span"
          className={classes.pMetaBarItem}
        >
          {pages[pageIndex][0].page}
        </Typography>
      </Tooltip>

      <Tooltip
        title={`Sura ${pages[pageIndex][0].verse_key.split(":")[0]}: ${
          suraList.suras.sura[
            Number(pages[pageIndex][0].verse_key.split(":")[0]) - 1
          ].tname
        } - ${
          suraList.suras.sura[
            Number(pages[pageIndex][0].verse_key.split(":")[0]) - 1
          ].ename
        } (ayas: ${
          suraList.suras.sura[
            Number(pages[pageIndex][0].verse_key.split(":")[0]) - 1
          ].ayas
        })`}
      >
        <Typography
          variant="h6"
          component="div"
          className={classes.pMetaBarItemTopRight}
          noWrap
        >
          <Typography
            variant="subtitle2"
            component="div"
            className={classes.SuraNameTopRight}
          >
            <span>
              {pages[pageIndex][0].verse_key.split(":")[0]}
              {". "}
              {
                suraList.suras.sura[
                  Number(pages[pageIndex][0].verse_key.split(":")[0]) - 1
                ].tname
              }
            </span>
            <span>
              {
                suraList.suras.sura[
                  Number(pages[pageIndex][0].verse_key.split(":")[0]) - 1
                ].ename
              }
            </span>
          </Typography>
          <span
            className={`s_name raq raq-surah${
              pages[pageIndex][0].verse_key.split(":")[0]
            }`}
          ></span>
        </Typography>
      </Tooltip>
    </Box>
  );
};

export default PageMetaBarTop;
