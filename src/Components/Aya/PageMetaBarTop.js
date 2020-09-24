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

const PageMetaBarTop = ({ juzMeta, pages, pageIndex, suraList, suraId }) => {
  const classes = useStyles();
  const { tname, ename, ayas, name, type, rukus, order } = suraList.suras.sura[
    Number(suraId) - 1
  ];
  const juz = juzMeta.juzs.juz[pages[pageIndex][0].juz - 1];

  return (
    <Box pt={2} pb={1} className={classes.pageMetaBar}>
      <Tooltip
        title={`Juz ${pages[pageIndex][0].juz}, Sura ${juz.sura}: ${juz.tname} (${juz.ename}), Aya: ${juz.aya}`}
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
          {juz.text.split(" ")[0]} {juz.text.split(" ")[1]}
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
        title={`Sura: ${name} (${type}), Ayas: ${ayas}, Rukus: ${rukus}, Revelation Order: ${order}`}
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
              {suraId}
              {". "}
              {tname}
            </span>
            <span>{ename}</span>
          </Typography>
          <span className={`s_name raq raq-surah${suraId}`}></span>
        </Typography>
      </Tooltip>
    </Box>
  );
};

export default PageMetaBarTop;
