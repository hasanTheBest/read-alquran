import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Tooltip, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  pageMetaBar: (suraId) => ({
    display: "flex",
    justifyContent:
      suraId === 1
        ? "flex-end"
        : suraId === 114
        ? "flex-start"
        : "space-between",
    "& .s_name": {
      ...theme.typography.h4,
    },
  }),
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

const PageMetaBarBottom = ({ props: { suraList, suraId } }) => {
  const classes = useStyles(suraId);

  return (
    <Box pt={1} pb={3} className={classes.pageMetaBar}>
      {suraId !== 1 && (
        <Tooltip
          title={`Go to previous Sura ${suraId - 1}: ${
            suraList.suras.sura[suraId - 2].tname
          } (ayas: ${suraList.suras.sura[suraId - 2].ayas})`}
        >
          <Typography variant="subtitle2">
            <Link
              to={`/sura/${suraId - 1}`}
              component={RouterLink}
              className={classes.suraNameAnchor}
            >
              <span className={`s_name raq raq-surah${suraId - 1}`}></span>
              <div className={classes.suraNameAnchorLeft}>
                <span>{suraList.suras.sura[suraId - 2].ename}</span>
                <span>
                  {`${suraId - 1}. ${suraList.suras.sura[suraId - 2].tname}`}
                </span>
              </div>
            </Link>
          </Typography>
        </Tooltip>
      )}

      {suraId !== 114 && (
        <Tooltip
          title={`Go to next Sura ${suraId + 1}: ${
            suraList.suras.sura[suraId].tname
          } (ayas: ${suraList.suras.sura[suraId].ayas})`}
        >
          <Typography variant="subtitle2">
            <Link
              to={`/sura/${suraId + 1}`}
              component={RouterLink}
              className={classes.suraNameAnchor}
            >
              <div className={classes.suraNameAnchorRight}>
                <span>{suraList.suras.sura[suraId].ename}</span>
                <span>
                  {`${suraId + 1}. ${suraList.suras.sura[suraId].tname}`}
                </span>
              </div>
              <span className={`s_name raq raq-surah${suraId + 1}`}></span>
            </Link>
          </Typography>
        </Tooltip>
      )}
    </Box>
  );
};

export default PageMetaBarBottom;
