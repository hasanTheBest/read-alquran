import React, { useContext } from "react";
import { Box } from "@material-ui/core";
import { SettingContext } from "../../../Context/SettingsContext";
import SelectItem from "./SelectNav/SelectItem";

const SelectNav = () => {
  const {
    selectItemFont,
    ayaTranslation,
    ayaRecitation,
    wordTranslation,
    setSelectItemValue,
  } = useContext(SettingContext);

  const handleChangeOnSelect = (event) => {
    const name = event.target.name;
    setSelectItemValue(event, name);
  };

  return (
    <Box p={2}>
      {/* Font */}
      <SelectItem
        itemName="Font"
        selectItemName="selectItemFont"
        selectItemValue={selectItemFont}
        handleChangeSelectItem={handleChangeOnSelect}
      >
        <>
          <option value="Uthmanic Hafs">Uthmanic Hafs</option>
          <option value="me_quran">me_quran</option>
          <option value="Uthmanic TN">Uthmanic TN</option>
          <option value="KFGQPC Uthman Taha Naskh">
            KFGQPC Uthman Taha Naskh
          </option>
          <option value="Old Madina Mushaf">Old Madina Mushaf</option>
          <option value="Noore Hidayat">Noore Hidayat</option>
          <option value="Nafees Nastaleeq">Nafees Nastaleeq</option>
        </>
      </SelectItem>

      {/* Word Translation */}
      <SelectItem
        itemName="Translation (Word)"
        selectItemName="wordTranslation"
        selectItemValue={wordTranslation}
        handleChangeSelectItem={handleChangeOnSelect}
      >
        <>
          <option value="word-tr-bangla">Bangla</option>
          <option value="word-tr-english">English</option>
        </>
      </SelectItem>

      {/* Translation */}
      <SelectItem
        itemName="Translation"
        selectItemName="ayaTranslation"
        selectItemValue={ayaTranslation}
        handleChangeSelectItem={handleChangeOnSelect}
      >
        <>
          <optgroup label="Default">
            <option value="Mojibor Rahman">Mojibor Rahman(Bangla)</option>
            <option value="Saheeh International">
              Saheeh International(English)
            </option>
          </optgroup>
          <optgroup label="Others" disabled>
            <option value="Urdu">Urdu</option>
            <option value="Hindi">Hindi</option>
            <option value="Tamil">Tamil</option>
            <option value="Dutch">Dutch</option>
          </optgroup>
        </>
      </SelectItem>
      {/* Recitation */}
      <SelectItem
        itemName="Recitation"
        selectItemName="ayaRecitation"
        selectItemValue={ayaRecitation}
        handleChangeSelectItem={handleChangeOnSelect}
      >
        <>
          <option disabled value="Mishr Al Afasy">
            Mishr Al Afasy
          </option>
          <option disabled value="Omar Hisham Farabi">
            Omar Hisham Farabi
          </option>
          <option disabled value="Hasan Gul">
            Hasan Gul
          </option>
        </>
      </SelectItem>
    </Box>
  );
};

export default SelectNav;
