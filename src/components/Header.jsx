import { Link } from "react-router";
import { IoHome } from "react-icons/io5";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

function Header() {
  return (
    <header>
      <Link to="/" className="home-icon" >
        <IoHome />
      </Link>
      <h1>Employee Management</h1>
      <Link to="/create" className="user-icon">
        <AiOutlineUsergroupAdd />
        Create New User
      </Link>
    </header>
  );
}

export default Header;
