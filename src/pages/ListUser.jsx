import { useEffect, useState } from "react";
import Search from "../components/Search";
import UserCard from "../components/UserCard";

function ListUser() {
  const [employees, setEmployees] = useState([]);

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
          <UserCard key={emp.id} employee={emp} />
        ))}
      </div>
    </>
  );
}

export default ListUser;
