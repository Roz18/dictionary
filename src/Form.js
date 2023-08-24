import React, { useState } from "react";
import axios from "axios";
import Results from "./Result";
import Photos from "./Photos";
import "./form.css";

export default function Form() {
  let [Kyeword, setKyeword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState([]);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Kyeword}`;
    axios.get(apiUrl).then(handleResponse);

    let ApiKey = "32ecda5bta3bd6bc964176affb080o6a";
    let ApiUrl = `https://api.shecodes.io/images/v1/search?query=${Kyeword}&key=${ApiKey}`;
    let headers = { Authorization: `Bearer ${ApiKey}` };
    axios.get(ApiUrl, { headers: headers }).then(handlePhotoResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
