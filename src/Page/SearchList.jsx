import { useEffect, useState } from "react";
import { Button } from "../Component/common";
import data from "../data/word.json";
import useDebounce from "../hook/useDebounce";

// 단어검색
export const SearchList = () => {
  const [search, setSearch] = useState("");
  const [word, setWord] = useState(data.words);

  const debouncedSearchText = useDebounce(search, 200);

  useEffect(() => {
    // api 요청
    console.log(debouncedSearchText);
    if (debouncedSearchText === "") setWord(data.words);
    else {
      console.log(debouncedSearchText);
      setWord(data.words.filter((w) => w.word.includes(debouncedSearchText)));
    }
  }, [debouncedSearchText]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2 overflow-scroll h-[100vh]">
      <h1>단어 검색</h1>
      <input
        className="w-[300px] p-3 border border-orange-500 rounded-2xl font-bold"
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="검색한 단어 입력"
      />
      {word.map((data) => (
        <div className="flex flex-col justify-center border border-red-500 w-[300px] h-[50px] font-bold">
          <div className="flex items-center justify-between p-2">
            <div>{data.word}</div>
            <div>{data.meaning}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
