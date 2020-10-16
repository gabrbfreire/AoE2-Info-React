import React, { useState } from "react";

function SearchUnits() {

  const [query, setQuery] = useState('');
  const [resultData, setData] = useState([]);

  const searchUnits = async (e) => {
    e.preventDefault();

    const proxyUrl = "https://cors-anywhere.herokuapp.com/"
    let url;
    if (query !== '') {
      url = "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/" + query;
    } else {
      url = "https://age-of-empires-2-api.herokuapp.com/api/v1/units";
    }

    try {
      const response = await fetch(proxyUrl + url);
      const data = await response.json();
      if (data.units === undefined) {
        setData([data]);
      } else {
        setData(data.units);

      }
      console.log(data.units)
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  const createList = () => {
    if (resultData.length > 0) {
      let listTitle = '<table class="table"><thead class="thead-dark"><tr><th scope="col">Name</th><th scope="col">Attack</th><th scope="col">Attack Delay</th><th scope="col">Armor</th><th scope="col">Hit Points</th><th scope="col">Mov. Rate</th></tr></thead><tbody>';
      let listContent = resultData.map(item => "<tr><td>" + item.name + "</td><td>" + function () { if (item.attack == undefined) { return ("-"); } else return (item.attack) }() + "</td><td>" + function () { if (item.attack_delay == undefined) { return ("-"); } else return (item.attack_delay) }() + "</td><td>" + item.armor + "</td><td>" + item.hit_points + "</td><td>" + function () { if (item.movement_rate == undefined) { return ("-"); } else return (item.movement_rate) }() + "</td></tr>");
      return (listTitle + listContent.join(" ") + "</tbody></table>");
    }
  }

  return (
    <>
      <form onSubmit={searchUnits} className="form-units mt-2">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Units name" value={query} onChange={(e) => setQuery(e.target.value)}></input>
          <div className="input-group-append">
            <button type="submit" className="btn btn-dark">Search</button>
          </div>
        </div>
      </form>
      <div className="list-div" dangerouslySetInnerHTML={{ __html: createList() }} />
    </>
  )
}

export default SearchUnits;