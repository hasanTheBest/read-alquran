import React, { useContext } from "react";
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  List as VList,
  WindowScroller,
} from "react-virtualized";
import { SuraContext } from "../../Context/SuraContextProvider";
import AyaRenderSingle from "./AyaRenderSingle";

const AyaVirtualLoader = () => {
  const { sura, ayaOfSura } = useContext(SuraContext);
  // console.log("AyaVirtualLoader -> ayaOfSura", ayaOfSura);

  const cache = new CellMeasurerCache({
    defaultHeight: 70,
    minHeight: 35,
    fixedWidth: true,
  });

  const rowRenderer = ({ index, key, style, parent }) => {
    const eachAya = sura.aya[index];

    const content = <AyaRenderSingle content={eachAya} />;

    return (
      <CellMeasurer
        cache={cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
        key={key}
      >
        {({ registerChild }) => (
          <div ref={registerChild} style={style}>
            {content}
          </div>
        )}
      </CellMeasurer>
    );
  };

  return (
    <>
      {console.log(Number(ayaOfSura))}
      <WindowScroller>
        {({ height, isScrolling, scrollTop, registerChild }) => (
          <div ref={registerChild} style={{ width: "100%" }}>
            <AutoSizer disableHeight>
              {({ width }) => (
                <VList
                  autoHeight
                  isScrolling={isScrolling}
                  scrollTop={scrollTop}
                  rowRenderer={rowRenderer}
                  width={width}
                  height={height}
                  rowCount={sura.aya.length}
                  rowHeight={cache.rowHeight}
                  scrollToIndex={String(ayaOfSura)}
                />
              )}
            </AutoSizer>
          </div>
        )}
      </WindowScroller>
    </>
  );
};

export default AyaVirtualLoader;
