import React, { createContext, useState } from "react";
// import { useParams } from "react-router-dom";
// import useSuspenseFetch from "../Hooks/useSuspenseFetch";

export const SettingContext = createContext();

const SettingProvider = ({ children }) => {
  const { stateSwitch, setStateSwitch } = useState({
    wbw: true,
    wbwTransliteration: false,
    wbwTranslation: true,

    showAya: true,
    showTajweed: true,
    showTranslation: true,
    showTransliteration: false,
  });
  const setSwitchValue = (e) => {
    setStateSwitch({ ...stateSwitch, [e.target.name]: e.target.checked });
  };
  const [state, setState] = useState({
    mobileOpen: false,

    // Switch
    wbw: true,
    wbwTransliteration: false,
    wbwTranslation: true,

    showAya: true,
    showTajweed: true,
    showTranslation: true,
    showTransliteration: false,

    // Slider
    fontSizeAr: 32,
    fontSizeTr: 18,

    // Select
    font: "Uthmanic Hafs",
    translation: "Mojibor Rahman",
    wordTranslation: "word-tr-bangla",
    recitation: "Omar Hisham Farabi",
  });

  const settings = {
    showWbw: state.wbw,
    showWbwTranslation: state.wbwTranslation,
    showWbwTransliteration: state.wbwTransliteration,
    showTajweed: state.showTajweed,
    showAya: state.showAya,
    showTranslation: state.showTranslation,
    showTransliteration: state.showTransliteration,
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
    wordTranslation: state.wordTranslation,
    ayaTranslation: state.translation,
    ayaRecitation: state.recitation,
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
