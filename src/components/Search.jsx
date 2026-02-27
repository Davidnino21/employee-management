import { CiFilter } from "react-icons/ci";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from "react-router";

function Search() {
  return (
    <div className="search">
      <form action="">
        <input type="text" name="" id="" placeholder="search user"/>
      </form>
      <div className="btn-actions">
        <button>
          <CiFilter />
          filter
        </button>
        <Link to="/create">
          <IoIosPersonAdd />
          Add Employee
        </Link>
      </div>
    </div>
  );
}

export default Search;
