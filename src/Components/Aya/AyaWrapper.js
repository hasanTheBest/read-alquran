import React, { useContext } from "react";
import { SettingContext } from "../../Context/SettingsContext";
import AyaArabic from "./AyaArabic";
import GenerateAyaFromWords from "./GenerateAyaFromWords";
import ShowTranslation from "./trans/ShowTranslation";

const AyaWrapper = ({
  props: {
    text,
    tajweed,
    ayaNum,
    words,
    page,
    translation: { en, bn, trl },
  },
}) => {
  const {
    showAya,
    showTranslation,
    showTransliteration,
    showTajweed,
    selectItemFont,
    ayaTranslation,
  } = useContext(SettingContext);

  return (
    <div>
      {/* Aya Arabic */}
      {showAya &&
        "Old Madina Mushaf" !== selectItemFont &&
        (showTajweed ? (
          <AyaArabic tajweedRule={tajweed} text={text} index={ayaNum} />
        ) : (
          <AyaArabic tajweedRule={null} text={text} index={ayaNum} />
        ))}

      {/*Aya for Old Madina Mushaf */}
      {selectItemFont === "Old Madina Mushaf" && (
        <GenerateAyaFromWords words={words} page={page} />
      )}

      {/* Transliteration */}
      {showTransliteration && (
        <ShowTranslation translation={trl} locale="en" index={ayaNum} />
      )}

      {/* Translation*/}
      {showTranslation && (
        <ShowTranslation
          translation={"Mojibor Rahman" === ayaTranslation ? bn : en}
          locale={"Mojibor Rahman" === ayaTranslation ? "bn" : "en"}
          index={ayaNum}
        />
      )}
    </div>
  );
};

export default AyaWrapper;
