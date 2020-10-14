import React, { useState } from "react";

function SearchCivs() {

  const [query, setQuery] = useState('');
  const [resultData, setData] = useState([]);

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
      setData(data.civilizations);
      console.log(data.civilizations)
    } catch (err) {
      console.log(err);
    }
  }

  const createList = () => {
    let listTitle = '<table className="data-table"><tr><th>Name</th><th>Army Type</th><th>Team Bonus</th></tr>';
    let listContent = resultData.map(item => "<tr><th>" + item.name + "</th><th>" + item.army_type + "</th><th>" + item.team_bonus + "</th></tr>");
    return (listTitle + listContent + "</table>")
  }

  return (
    <>
      <form onSubmit={searchCivs} className="form-civs">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}></input>
        <button type="submit">Search</button>
      </form>

      <div dangerouslySetInnerHTML={{ __html: createList() }} />

    </>
  )
}

export default SearchCivs;