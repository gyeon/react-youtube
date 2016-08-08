import React from 'react';


const SearchBar = class extends React.Component {
  render () {
    return(
      <div className="search-bar">
      <input type="text" placeholder="search here!" />
      <input type="submit" />
      </div>
    )
  }
}

export default SearchBar;
