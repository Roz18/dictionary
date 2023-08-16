import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  let [Kyeword, setKyeword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
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
    <form onSubmit={search}>
      <input
        type="search"
        placeholder="Search"
        autoFocus={true}
        onChange={handleKeywordChange}
      />
    </form>
  );
}
