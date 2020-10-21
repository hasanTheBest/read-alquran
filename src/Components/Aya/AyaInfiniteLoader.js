import React, { useContext, useEffect, useReducer, useState } from "react";
import { SuraContext } from "../../Context/SuraContextProvider";
import AyaInfiniteLoaderWrapper from "./AyaInfiniteLoaderWrapper";

const AyaInfiniteLoader = () => {
  const { sura } = useContext(SuraContext);
  return <AyaInfiniteLoaderWrapper list={sura.aya} />;
};

export default AyaInfiniteLoader;
