import React, { useContext, useState } from "react";
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
  // const [scrollToIndex, setScrollToIndex] = useState(-1)
  // console.log("AyaVirtualLoader -> ayaOfSura", ayaOfSura);

  let scrollToIndex = ayaOfSura;
  const setScrollToIndex = ({ scrollTop, scrollLeft }) => {
    console.log("setScrollToIndex -> scrollLeft", scrollLeft);
    console.log("setScrollToIndex -> scrollTop", scrollTop);
  };

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
      <WindowScroller onScroll={setScrollToIndex}>
        {({ height, isScrolling, scrollTop, onChildScroll, registerChild }) => (
          <div ref={registerChild} style={{ width: "100%" }}>
            <AutoSizer disableHeight>
              {({ width }) => (
                <VList
                  autoHeight
                  isScrolling={isScrolling}
                  scrollTop={scrollTop}
                  rowRenderer={rowRenderer}
                  deferredMeasurementCache={cache}
                  width={width}
                  height={height}
                  onScroll={onChildScroll}
                  rowCount={sura.aya.length}
                  rowHeight={cache.rowHeight}
                  scrollToAlignment="start"
                  scrollToIndex={50}
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
