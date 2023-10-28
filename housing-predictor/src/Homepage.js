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
    <div className="homepage" style={styles.container}>
      <h1>Welcome to My Website</h1>
      <form onSubmit={handleSearchSubmit}>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    background: 'blue',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  searchInput: {
    padding: '10px',
    marginRight: '10px',
    borderRadius: '4px',
    border: 'none',
  },
  searchButton: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'white',
    color: 'blue',
    cursor: 'pointer',
  },
};

export default HomePage;
