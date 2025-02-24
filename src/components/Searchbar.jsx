import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Searchbar() {
  const navigate = useNavigate();

  const [ search, setSearch ] = useState({ query: '', category: 'all-categories' });

  const handleSearch = (e) => {
    if (search.query.trim()) {
      navigate(`/Search?query=${search.query}&category=${search.category}`);
      setSearch({ query: '', category: 'all-categories' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };


  return (
    <>
      <div className="search-container">
        <select
        className="search-dropdown"
        value={search.category}
        onChange={(e) =>
          setSearch((prev) => ({ ...prev, category: e.target.value }))
        }
        >
          <option value="all-categories">All Categories...</option>
          <option value="something">something</option>
        </select>
        <div className="divider"></div>
        <input
          type="text"
          id="search-input"
          className="search-input"
          placeholder="Search products..."
          value={search.query}
          onChange={(e) =>
            setSearch((prev) => ({
              ...prev,
              query: e.target.value,
            }))
          }
          onKeyDown={handleKeyDown}
        />
        <button className="search-btn" onClick={(e) => handleSearch(e)}>
          <i className="bi bi-search"></i>
        </button>
      </div>
    </>
  );
}

export default Searchbar;
