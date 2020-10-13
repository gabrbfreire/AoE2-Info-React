import React, { useState } from "react";

function SearchStructures() {

  const [query, setQuery] = useState('');

  const searchStructures = async (e) => {
    e.preventDefault();

    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    let url;
    if (query !== '') {
      url = "https://age-of-empires-2-api.herokuapp.com/api/v1/structure/" + query;
    } else {
      url = "https://age-of-empires-2-api.herokuapp.com/api/v1/structures";
    }

    try {
      const response = await fetch(proxyUrl + url);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={searchStructures} className="form-structures">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}></input>
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchStructures;