// import React from "react";
// import tajweed from "./tajweed/1.json";

export const tajweedMarker = (tajweedRule, text, index) => {
  let textSplitted = text.split("");

  if (Boolean(tajweedRule.aya)) {
    tajweedRule.aya[index].annotations.forEach(({ start, rule, end }, i) => {
      textSplitted[start] = textSplitted[start].includes("</span>")
        ? textSplitted[start].replace(
            "</span>",
            `</span><span class=${rule} title=${rule}>`
          )
        : `<span class=${rule} title=${rule}>` + textSplitted[start];

      textSplitted[end] = `</span>` + textSplitted[end];
    });
  }

  return textSplitted.join("");
};
