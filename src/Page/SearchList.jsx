import { useEffect, useState } from "react";
import { Button } from "../Component/common";
import data from "../data/word.json";
import useDebounce from "../hook/useDebounce";
import "./style/searchStyle.css";

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
    <div className="background-screen">
      <div className="list-card">
        <input
          className="search-box"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="검색할 단어 입력"
        />
        <div className="word-list">
          {word.map((data) => (
            <div className="word-row">
                <div className="word-left">{data.word}</div>
                <div className="word-right">{data.meaning}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
