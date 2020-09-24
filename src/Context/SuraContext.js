import React, { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import useSuspenseFetch from "../Hooks/useSuspenseFetch";

export const suraContext = createContext();

const SuraContext = ({ children }) => {
  let { suraId } = useParams();
  let ayaId;

  if (!Number(suraId)) {
    suraId = suraId.split(":")[0];
    ayaId = suraId.split(":")[1];
  }

  // const suraId = useParams();
  const sura = useSuspenseFetch("arabic", suraId);
  const textAr = useSuspenseFetch("arabic/textAr", suraId);
  const tajweed = useSuspenseFetch("tajweedRule", suraId);
  const trBn = useSuspenseFetch("translation/an_bn_mujibor", suraId);
  const trEn = useSuspenseFetch("translation/an_en_shahih", suraId);
  const trlEn = useSuspenseFetch("translation/an_en_transliteration", suraId);

  //useFetch

  const value = {
    ayaId: Number(ayaId) ? Number(ayaId) : 1,
    ayaCount: sura.aya.length,
    suraId,
    sura,
    textAr,
    tajweed,
    trBn,
    trEn,
    trlEn,
  };

  return <suraContext.Provider value={value}>{children}</suraContext.Provider>;
};

export default SuraContext;
