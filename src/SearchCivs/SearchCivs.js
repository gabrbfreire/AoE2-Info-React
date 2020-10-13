import React, { useState } from "react";

function SearchCivs() {

  const [query, setQuery] = useState('');

  const searchCivs = async (e) => {
    e.preventDefault();

    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    let url;
    if (query !== '') {
      url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/" + query;
    } else {
      url = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
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
    <form onSubmit={searchCivs} className="form-civs">
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}></input>
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchCivs;