import React, { useState } from "react";

function SearchTechnologies() {

  const [query, setQuery] = useState('');
  const [resultData, setData] = useState([]);
  const [message, setMessage] = useState([]);

  const searchTechnologies = async (e) => {
    e.preventDefault();

    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    let url;
    if (query !== '') {
      url = "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/" + query;
    } else {
      url = "https://age-of-empires-2-api.herokuapp.com/api/v1/technologies";
    }

    try {
      const response = await fetch(proxyUrl + url);
      const data = await response.json();
      if (data.message !== undefined) {
        setMessage(data.message);
        return;
      }
      if (data.technologies === undefined) {
        if (data.length !== undefined) {
          setData(data);
        } else {
          setData([data]);
        }
      } else {
        setData(data.technologies);
      }
      setMessage("");
    } catch (err) {
      console.log(err);
    }
  }

  const createList = () => {
    if (resultData.length > 0) {
      let listTitle = '<table class="table"><thead class="thead-dark"><tr><th scope="col">Name</th><th scope="col">Description</th><th scope="col">Cost</th><th scope="col">Build Time</th><th scope="col">Age</th></thead><tbody>';
      let listContent = resultData.map(item => "<tr><td>" + item.name + "</td><td>" + item.description + "</td><td>" + function () { if (item.cost.Food === undefined) { return ("-"); } else return (item.cost.Food) }() + "/" + function () { if (item.cost.Gold === undefined) { return ("-"); } else return (item.cost.Gold) }() + "</td><td>" + item.build_time + "</td><td>" + item.age + "</td>");
      return (listTitle + listContent.join(" ") + "</tbody></table>");
    }
  }

  return (
    <>
      <form onSubmit={searchTechnologies} className="form-tech mt-2">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Technology name" value={query} onChange={(e) => setQuery(e.target.value)}></input>
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

export default SearchTechnologies;