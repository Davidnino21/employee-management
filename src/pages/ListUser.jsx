import { useEffect, useState } from "react";
import Search from "../components/Search";
import UserCard from "../components/UserCard";
import DeleteModal from "../components/DeleteModal";

function ListUser() {
  const [employees, setEmployees] = useState([]);
  const [showDelete, setShowDelete] = useState(false)
  const [selectedName, setSelectedName] = useState("")

  function toggleDelete(name) {
    setShowDelete(!showDelete)
    setSelectedName(name)
  }

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <>
      <Search />
      <div className="user-container">
        {employees.map((emp) => (
          <UserCard key={emp.id} employee={emp} toggle={toggleDelete}/>
        ))}
      </div>
      <DeleteModal show={showDelete} cancel={toggleDelete} selectedName={selectedName}/>
    </>
  );
}

export default ListUser;
