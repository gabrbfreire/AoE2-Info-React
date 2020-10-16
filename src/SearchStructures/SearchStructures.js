import React, { useState } from "react";

function SearchStructures() {

  const [query, setQuery] = useState('');
  const [resultData, setData] = useState([]);
  const [message, setMessage] = useState([]);

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
      if (data.message !== undefined) {
        setMessage(data.message);
        return;
      }
      if (data.structures === undefined) {
        if (data.length !== undefined) {
          setData(data);
        } else {
          setData([data]);
        }
      } else {
        setData(data.structures);
      }
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  }

  const createList = () => {
    if (resultData.length > 0) {
      let listTitle = '<table class="table"><thead class="thead-dark"><tr><th scope="col">Name</th><th scope="col">Hit Points</th><th scope="col">Armor</th><th scope="col">Build Time</th><th scope="col">Age</th></thead><tbody>';
      let listContent = resultData.map(item => "<tr><td>" + item.name + "</td><td>" + item.hit_points + "</td><td>" + item.armor + "</td><td>" + item.build_time + "</td><td>" + item.age + "</td>");
      return (listTitle + listContent.join(" ") + "</tbody></table>");
    }
  }

  return (
    <>
      <form onSubmit={searchStructures} className="form-structures mt-2">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Structure name" value={query} onChange={(e) => setQuery(e.target.value)}></input>
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

export default SearchStructures;