import React, { createContext } from "react";
import { useParams } from "react-router-dom";
import useSuspenseFetch from "../Hooks/useSuspenseFetch";

export const SuraContext = createContext();

const SuraContextProvider = ({ children }) => {
  let { suraId } = useParams();
  let ayaId;

  if (!Number(suraId)) {
    suraId = suraId.split(":")[0];
    ayaId = suraId.split(":")[1];
  }

  const sura = useSuspenseFetch("default", suraId);

  const value = {
    ayaId: Number(ayaId) ? Number(ayaId) : 1,
    ayaCount: sura.aya.length,
    suraId,
    sura,
  };

  return <SuraContext.Provider value={value}>{children}</SuraContext.Provider>;
};

export default SuraContextProvider;
