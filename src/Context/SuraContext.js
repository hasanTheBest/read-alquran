import React, { createContext } from "react";
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

  const sura = useSuspenseFetch("default", suraId);

  const value = {
    ayaId: Number(ayaId) ? Number(ayaId) : 1,
    ayaCount: sura.aya.length,
    suraId,
    sura,
  };

  return <suraContext.Provider value={value}>{children}</suraContext.Provider>;
};

export default SuraContext;
