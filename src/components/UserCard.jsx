import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { MdOutlineMailLock } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router";

function UserCard({ employee, toggle }) {
  const [showMenu, setShowMenu] = useState(false);

  function handleToggle() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="user-card">
      <div className="card-header">
        <img src={employee.avatar} alt="" />
        <span onClick={handleToggle}>
          <IoChatboxEllipsesOutline />
        </span>
      </div>
      <div className="card-info">
        <h3>{employee.name}</h3>
        <p>
          <MdOutlinePhonelinkRing /> <span>{employee.phone}</span>
        </p>
        <p>
          <MdOutlineMailLock /> <span>{employee.email}</span>
        </p>
        <p>
          <FaClipboardList /> <span>{employee.title}</span>
        </p>
      </div>
      <div
        className="user-card-menu"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <Link className="option-btn" to={`/${employee.id}`}>
          Details
        </Link>
        <Link className="option-btn" to={`/edit/${employee.id}`}>
          Edit
        </Link>
        <button className="option-btn" onClick={() => toggle(employee)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCard;
