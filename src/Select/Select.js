import React from "react";

function Select() {

  const changeSearch = (e) => {
    let type = e.target.value
    console.log(type)
    switch (type) {
      case '0':
        document.getElementsByClassName("form-civs")[0].style.display = "block";
        document.getElementsByClassName("form-structures")[0].style.display = "none";
        document.getElementsByClassName("form-tech")[0].style.display = "none";
        document.getElementsByClassName("form-units")[0].style.display = "none";
        break;
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

  const activateItem = (e) => {
    document.getElementsByClassName("dropdown-item")[0].className = "dropdown-item rounded";
    document.getElementsByClassName("dropdown-item")[1].className = "dropdown-item rounded";
    document.getElementsByClassName("dropdown-item")[2].className = "dropdown-item rounded";
    document.getElementsByClassName("dropdown-item")[3].className = "dropdown-item rounded";
    e.target.className = e.target.className + " active";
    changeSearch(e);
  }

  return (
    <div class="row d-flex justify-content-center">
      <div name="types" id="types">
        <option value="0" className="dropdown-item rounded active" onClick={(e) => activateItem(e)}>Civilizations</option>
        <option value="1" className="dropdown-item" onClick={(e) => activateItem(e)}>Units</option>
        <option value="2" className="dropdown-item" onClick={(e) => activateItem(e)}>Structures</option>
        <option value="3" className="dropdown-item" onClick={(e) => activateItem(e)}>Technologies</option>
      </div>
    </div>
  )
}

export default Select;