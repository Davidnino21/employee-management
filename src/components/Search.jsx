import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router";
import { useState } from "react";

function Search({ filterEmployees }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    filterEmployees(search);
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
        />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Search;
