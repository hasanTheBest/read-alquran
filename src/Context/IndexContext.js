import React, { createContext, useState } from "react";

import suraList from "../Components/SuraInfo/data/suraMeta.json";
import pageMeta from "../Components/SuraIndex/data/pageMeta.json";
import juzMeta from "../Components/SuraIndex/data/juzMeta.json";
import rukusMeta from "../Components/SuraIndex/data/rukusMeta.json";
import hizbMeta from "../Components/SuraIndex/data/hizbMeta.json";
import sajdasMeta from "../Components/SuraIndex/data/sajdasMeta.json";
import manzilsMeta from "../Components/SuraIndex/data/manzilsMeta.json";

export const IndexContext = createContext();

const IndexContextProvider = ({ children }) => {
  // const [openNavigationDrawer, setOpenNavigationDrawer] = useState(false);
  const [tabValue, setTabValue] = useState("Sura");

  const handleChangeTab = (value) => {
    setTabValue(value);
  };

  // const toggleNavigationDrawer = () =>
  //   setOpenNavigationDrawer(!openNavigationDrawer);

  return (
    <IndexContext.Provider
      context={{
        // suraList,
        // pageMeta,
        // juzMeta,
        // rukusMeta,
        // hizbMeta,
        // sajdasMeta,
        // manzilsMeta,
        // tabValue,
        // openNavigationDrawer,
        // handleChangeTab,
        // toggleNavigationDrawer,
        log: "console.log(IndexContext)",
      }}
    >
      {children}
    </IndexContext.Provider>
  );
};

export default IndexContextProvider;
