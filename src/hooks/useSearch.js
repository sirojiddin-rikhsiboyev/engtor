import { useMemo } from "react";

export const useSort = (words, sort) => {
  const sorted = useMemo(() => {
    if (sort === "definition" || sort === "word") {
      return [...words].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else if (sort === "date") {
      return [...words].sort((a, b) => a[sort] - b[sort]);
    }
    return words;
  }, [sort, words]);

  return sorted;
};

export const useSearch = (words, child, sort, query) => {
  const sorted = useSort(words, sort);

  const sortedAndSearched = useMemo(() => {
    return sorted.filter((word) =>
      word[child].toLowerCase().includes(query.toLowerCase())
    );
  }, [query, child, sorted]);

  return sortedAndSearched;
};
