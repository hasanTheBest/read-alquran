import React, { createContext, useState } from "react";

export const SettingContext = createContext();

const SettingProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [stateSwitch, setStateSwitch] = useState({
    showWbw: true,
    showWbwTransliteration: false,
    showWbwTranslation: true,

    showAya: true,
    showTajweed: true,
    showTranslation: true,
    showTransliteration: false,
  });

  const [stateSlider, setStateSlider] = useState({
    fontSizeArabic: 40,
    fontSizeTranslation: 18,
  });

  const [stateSelect, setStateSelect] = useState({
    selectItemFont: "Uthmanic Hafs",
    wordTranslation: "word-tr-bangla",
    ayaTranslation: "Mojibor Rahman",
    ayaRecitation: "Omar Hisham Farabi",
  });

  const handleOpenDrawer = () => setOpenDrawer(!openDrawer);

  const setSwitchValue = (e) => {
    setStateSwitch((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const setFontSize = (newValue, text) => {
    if ("arabic" === text) {
      setStateSlider((prev) => ({
        ...prev,
        fontSizeArabic: newValue,
      }));
    } else {
      setStateSlider((prev) => ({ ...prev, fontSizeTranslation: newValue }));
    }
  };

  const setSelectItemValue = (event, name) => {
    setStateSelect((prev) => {
      return { ...prev, [name]: event.target.value };
    });
  };

  return (
    <SettingContext.Provider
      value={{
        ...stateSwitch,
        ...stateSelect,
        ...stateSlider,
        openDrawer,
        handleOpenDrawer,
        setFontSize,
        setSwitchValue,
        setSelectItemValue,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};

export default SettingProvider;
