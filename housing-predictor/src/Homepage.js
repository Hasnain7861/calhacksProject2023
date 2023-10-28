import React, { useState } from 'react';

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
      <h1>Welcome to My Website</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default HomePage;
