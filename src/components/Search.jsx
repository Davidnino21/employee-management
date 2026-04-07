import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router";
import { useState } from "react";

function Search({ filterEmployees, getUsers }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    filterEmployees(search);
  }

  function clearSearch() {
    setSearch("");
    getUsers();
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="search user"
          onChange={handleChange}
          value={search}
        />
        <button>Search</button>
        <button type="button" onClick={clearSearch}>
          Clear
        </button>
      </form>
    </div>
  );
}

export default Search;
