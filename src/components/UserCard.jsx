import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { MdOutlineMailLock } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";

function UserCard({ employee }) {
  return (
    <div className="user-card">
      <div className="card-header">
        <img src={employee.avatar} alt="" />
        <span>
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
    </div>
  );
}

export default UserCard;
