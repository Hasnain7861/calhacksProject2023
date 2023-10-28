import React, { useState } from 'react';
import './Homepage.css'; 

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the search query here, such as sending it to an API.
    console.log(`User searched for: ${searchQuery}`);
  };

  return (
    <div className="homepage">
      <div className="background-image"></div>
      <div className="content-container">
        <h1>Welcome to My Housing Price Prediction</h1>
        <form onSubmit={handleSearchSubmit}>
          <div className="search-container">
            <input
              type="text"
              placeholder="Enter a city name"
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomePage;
