import React, { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import useSuspenseFetch from "../Hooks/useSuspenseFetch";

export const suraContext = createContext();

const SuraContext = ({ children }) => {
  let suraId = useParams();

  if (!Number(suraId.suraId)) {
    let s = suraId.suraId;

    suraId.suraId = s.split(":")[0];
    suraId.ayaId = s.split(":")[1];
  }

  // const suraId = useParams();
  const sura = useSuspenseFetch("arabic", suraId.suraId);
  const trBn = useSuspenseFetch("translation/an_bn_mujibor", suraId.suraId);
  const tajweed = useSuspenseFetch("tajweedRule", suraId.suraId);
  const textAr = useSuspenseFetch("arabic/textAr", suraId.suraId);

  //useFetch

  const value = {
    sura: sura,
    trBn: trBn,
    tajweed: tajweed,
    suraId: suraId,
    ayaId: Number(suraId.ayaId) ? Number(suraId.ayaId) : 1,
    ayaCount: sura.aya.length,
    textAr: textAr,
  };

  return <suraContext.Provider value={value}>{children}</suraContext.Provider>;
};

export default SuraContext;
