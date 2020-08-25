import React, { createContext, useState } from "react";
// import { useParams } from "react-router-dom";
// import useSuspenseFetch from "../Hooks/useSuspenseFetch";

export const SettingContext = createContext();

const SettingProvider = ({ children }) => {
  const [state, setState] = useState({
    wbw: true,
    wbwTransliteration: false,
    wbwTranslation: true,
    showTajweed: true,
    showAya: true,
    translation: true,
    transliteration: false,
    fontSizeAr: 32,
    fontSizeTr: 18,
    font: "Uthmanic Hafs",
    mobileOpen: false,
  });

  const settings = {
    showWbw: state.wbw,
    showWbwTranslation: state.wbwTranslation,
    showWbwTransliteration: state.wbwTransliteration,
    showTajweed: state.showTajweed,
    showAya: state.showAya,
    showTranslation: state.translation,
    showTransliteration: state.transliteration,
    setSwitchValue: (e) =>
      setState({ ...state, [e.target.name]: e.target.checked }),

    fontSizeArabic: state.fontSizeAr,
    fontSizeTranslation: state.fontSizeTr,
    setFontSize: (newValue, text) => {
      if ("arabic" === text) {
        setState({
          ...state,
          fontSizeAr: newValue,
        });
      } else {
        setState({ ...state, fontSizeTr: newValue });
      }
    },

    selectItemFont: state.font,
    // selectItemRecitation: state./,
    // selectItemTranslation: state.font,
    // selectItemName: state.name,
    setSelectItemValue: (event, name) =>
      setState({
        ...state,
        [name]: event.target.value,
      }),

    drawerMobileOpen: state.mobileOpen,
    setDrawerMobileOpen: () => {
      setState({ ...state, mobileOpen: !state.mobileOpen });
    },
  };

  return (
    <SettingContext.Provider value={{ ...settings }}>
      {children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;
