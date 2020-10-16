import React, { useState } from "react";

function SearchCivs() {

  const [query, setQuery] = useState('');
  const [resultData, setData] = useState([]);
  const [message, setMessage] = useState([]);

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
      if (data.message !== undefined) {
        setMessage(data.message);
        return;
      }
      if (data.civilizations === undefined) {
        setData([data]);
      } else {
        setData(data.civilizations);
      }
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  }

  const createList = () => {
    if (resultData.length > 0) {
      let listTitle = '<table class="table"><thead class="thead-dark"><tr><th scope="col">Name</th><th scope="col">Army Type</th><th scope="col">Team Bonus</th></tr></thead><tbody>';
      let listContent = resultData.map(item => "<tr><td>" + item.name + "</td><td>" + item.army_type + "</td><td>" + item.team_bonus + "</td></tr>");
      return (listTitle + listContent.join(" ") + "</tbody></table>");
    }
  }

  return (
    <>
      <form onSubmit={searchCivs} className="form-civs mt-2">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Civilization name" value={query} onChange={(e) => setQuery(e.target.value)}></input>
          <div className="input-group-append">
            <button type="submit" className="btn btn-dark">Search</button>
          </div>
        </div>
        <p id="message">{message}</p>
      </form>
      <div className="list-div" dangerouslySetInnerHTML={{ __html: createList() }} />
    </>
  )
}

export default SearchCivs;