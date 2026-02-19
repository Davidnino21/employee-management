import { CiFilter } from "react-icons/ci";
import { IoIosPersonAdd } from "react-icons/io";

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
        <button>
          <IoIosPersonAdd />
          Add Employee
        </button>
      </div>
    </div>
  );
}

export default Search;
