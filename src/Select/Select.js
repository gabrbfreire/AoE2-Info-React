import React from "react";

function Select() {

  const changeSearch = (e) => {
    let type = e.target.value
    console.log(typeof type)
    switch (type) {
      case '0':
        document.getElementsByClassName("form-civs")[0].style.display = "block";
        document.getElementsByClassName("form-structures")[0].style.display = "none";
        document.getElementsByClassName("form-tech")[0].style.display = "none";
        document.getElementsByClassName("form-units")[0].style.display = "none";
      case '1':
        document.getElementsByClassName("form-civs")[0].style.display = "none";
        document.getElementsByClassName("form-structures")[0].style.display = "none";
        document.getElementsByClassName("form-tech")[0].style.display = "none";
        document.getElementsByClassName("form-units")[0].style.display = "block";
        break;
      case '2':
        document.getElementsByClassName("form-civs")[0].style.display = "none";
        document.getElementsByClassName("form-structures")[0].style.display = "block";
        document.getElementsByClassName("form-tech")[0].style.display = "none";
        document.getElementsByClassName("form-units")[0].style.display = "none";
        break;
      case '3':
        document.getElementsByClassName("form-civs")[0].style.display = "none";
        document.getElementsByClassName("form-structures")[0].style.display = "none";
        document.getElementsByClassName("form-tech")[0].style.display = "block";
        document.getElementsByClassName("form-units")[0].style.display = "none";
        break;
      default:
        break;
    }
  }

  return (
    <select name="types" id="types" onChange={(e) => changeSearch(e)}>
      <option value="0">Civilizations</option>
      <option value="1">Units</option>
      <option value="2">Structures</option>
      <option value="3">Technologies</option>
    </select >
  )
}

export default Select;