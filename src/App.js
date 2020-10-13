import React from 'react';
import './App.css';
import SearchCivs from "./SearchCivs/SearchCivs"
import SearchUnits from "./SearchUnits/SearchUnits"
import SearchStructures from "./SearchStructures/SearchStructures"
import SearchTechnologies from "./SearchTechnologies/SearchTechnologies"
import Select from './Select/Select';

function App() {

  return (
    <div className="App">
      <h1>Age of Empires II Info</h1>
      <Select />
      <SearchCivs></SearchCivs>
      <SearchUnits></SearchUnits>
      <SearchStructures></SearchStructures>
      <SearchTechnologies></SearchTechnologies>
    </div>
  );
}

export default App;
