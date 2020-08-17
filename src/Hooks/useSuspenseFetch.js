import LRU from "lru-cache";
import md5 from "md5";

const cache = new LRU(500);

const useSuspenseFetch = (dir, id) => {
  const key = `suraArabic.${md5(JSON.stringify(dir + id))}`;
  const value = cache.get(key) || { status: "new", data: null };

  if (value.status === "resolved") {
    return value.data;
  }

  const promise = fetch(`${dir}/${id}.json`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());

  promise.then((data) => {
    value.status = "resolved";
    value.data = data;
    cache.set(key, value);
  });

  throw promise;
};

export default useSuspenseFetch;
