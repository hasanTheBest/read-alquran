import React, { useContext, useEffect, useReducer, useState } from "react";
import { SuraContext } from "../../Context/SuraContextProvider";
import AyaInfiniteLoaderWrapper from "./AyaInfiniteLoaderWrapper";

const AyaInfiniteLoader = () => {
  const { sura } = useContext(SuraContext);

  const [hasNextPage, setHasNextPage] = useState(true);
  const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);

  const loadItems = ({ startIndex }) => {
    setHasNextPage(items.length < sura.aya.length);
    setItems((prev) => {
      return prev.concat(sura.aya.slice(startIndex, 10 + startIndex));
    });

    // setLoading(true);
    // setTimeout(() => {
    //   // setLoading(false);
    // }, 1000);
  };

  // useEffect(() => {
  //   setItems([]);
  // }, [sura.length]);

  // const reducerFun = (prevState, action) => {
  //   switch (action.type) {
  //     case "start":
  //       return {
  //         ...prevState,
  //         loading: true,
  //       };

  //     case "loaded":
  //       return {
  //         ...prevState,
  //         hasNextPage: prevState.items.length < sura.aya.length,
  //         loading: false,
  //         items: [...prevState.items, ...action.data],
  //       };

  //     default:
  //       throw new Error("Does not get what it say");
  //   }
  // };

  // const [state, dispatch] = useReducer(reducerFun, {
  //   hasNextPage: true,
  //   loading: false,
  //   items: [],
  // });

  // const loadItems = ({ startIndex }) => {
  //   dispatch({ type: "start" });

  //   setTimeout(() => {
  //     let newData = sura.aya.slice(startIndex, 10 + startIndex);
  //     dispatch({ type: "loaded", data: newData });
  //   }, 1000);
  // };
  // const { hasNextPage, loading, items } = state;

  return (
    <AyaInfiniteLoaderWrapper
      list={sura.aya}
      // hasNextPage={hasNextPage}
      // loadNextPage={loadItems}
    />
  );
};

export default AyaInfiniteLoader;
