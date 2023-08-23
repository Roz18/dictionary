import React, { useState } from "react";
import axios from "axios";
import Results from "./Result";
import "./form.css";

export default function Form() {
  let [Kyeword, setKyeword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Kyeword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKyeword(event.target.value);
  }

  return (
    <div className="searchForm">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search"
          autoFocus={true}
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
