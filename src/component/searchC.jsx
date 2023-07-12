import React, { useState } from 'react';
import DisplayCrew from '../component/displayCrew';
import SearchBar from '../component/searchBar';
import '../styles/css/viewAllCrew.css';
import Fetcher from '../component/fetcher';

const SearchC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCrewList = (data) =>
    data.filter(
      (crew) =>
        crew.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crew.agency.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <>
      <SearchBar
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by name or agency"
      />
      <div className="container">
        <Fetcher url="https://api.spacexdata.com/v4/crew" render={({ data }) => (
          <ul className="image-list grid-view">
            {filteredCrewList(data).map((item) => (
              <DisplayCrew key={item.id} id={item.id} name={item.name} image={item.image} />
            ))}
          </ul>
        )} />
      </div>
    </>
  );
};

export default SearchC;
