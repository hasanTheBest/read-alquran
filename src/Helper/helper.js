// By Aya
export const tajweedMarker = (rule, text) => {
  let textSplitted = text.split("");

  rule.annotations.forEach(({ start, rule, end }, i) => {
    textSplitted[start] = textSplitted[start].includes("</span>")
      ? textSplitted[start].replace(
          "</span>",
          `</span><span class=${rule} title=${rule}>`
        )
      : `<span class=${rule} title=${rule}>` + textSplitted[start];

    textSplitted[end] = `</span>` + textSplitted[end];
  });

  return textSplitted.join("");
};

// sura page by page
export const pageByPage = (sura, suraId, ayaCount, ayaId) => {
  let [pages, webFontFamilies, webFontUrls] = [[], [], []];

  let p1 = sura.aya[ayaId - 1] && sura.aya[ayaId - 1].page;
  const pLast = sura.aya[ayaCount - 1] && sura.aya[ayaCount - 1].page;

  // If verse_key present
  if (ayaId) {
    sura.aya2 = sura.aya.slice(ayaId - 1);
  }

  // Divide into page
  while (p1 <= pLast) {
    let ayaNum = sura.aya[0].verse_key;
    ayaNum = Number(ayaNum.split(":")[1]);

    let p =
      Boolean(p1) && ayaId === ayaNum
        ? sura.aya
            .filter(
              ({ page, verse_key }) =>
                p1 === page && suraId === verse_key.split(":")[0]
            )
            .map((v) => v)
        : sura.aya2
            .filter(
              ({ page, verse_key }) =>
                p1 === page && suraId === verse_key.split(":")[0]
            )
            .map((v) => v);

    pages = [...pages, p];

    webFontFamilies.push(`QCF_P${String(p1).padStart(3, 0)}`);
    webFontUrls.push(`/fonts/QCF_P${String(p1).padStart(3, 0)}.css`);

    p1++;
  }

  const webFontConfig = {
    custom: {
      families: webFontFamilies,
      urls: webFontUrls,
      timeout: 5000,
    },
  };

  return {
    pages,
    webFontConfig,
  };
};

// by sura
export const tajweedMarkerSura = (tajweedRule, text, index) => {
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
