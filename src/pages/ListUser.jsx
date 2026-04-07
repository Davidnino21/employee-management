import { useEffect, useState } from "react";
import Search from "../components/Search";
import UserCard from "../components/UserCard";
import DeleteModal from "../components/DeleteModal";

function ListUser() {
  const [employees, setEmployees] = useState([]);
  const [showDelete, setShowDelete] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const res = await fetch("http://localhost:3000/employees");
      const data = await res.json();
      setEmployees(data);
      return data;
    } catch (error) {}
  }

  function toggleDelete(user) {
    setShowDelete(!showDelete);
    setSelectedUser(user);
  }

  async function deleteUserById(id) {
    try {
      const res = fetch(`http://localhost:3000/employees/${id}`, {
        method: "delete",
      });
      const filtered = employees.filter((emp) => emp.id != id);
      setEmployees(filtered);
      setShowDelete(false);
    } catch (error) {}
  }

  async function filterEmployees(keyword) {
    try {
      const data = await getUsers()
      const filtered = data.filter((emp) => {
        return (
          emp.name.toLowerCase().includes(keyword.toLowerCase()) ||
          emp.phone.includes(keyword) ||
          emp.email.toLowerCase().includes(keyword.toLowerCase()) ||
          emp.title.toLowerCase().includes(keyword.toLowerCase())
        );
      });
      setEmployees(filtered);
    } catch (error) {}
  }

  return (
    <>
      <Search filterEmployees={filterEmployees} getUsers={getUsers}/>
      <div className="user-container">
        {employees.map((emp) => (
          <UserCard key={emp.id} employee={emp} toggle={toggleDelete} />
        ))}
      </div>
      <DeleteModal
        show={showDelete}
        cancel={toggleDelete}
        selectedUser={selectedUser}
        deleteEmployee={deleteUserById}
      />
    </>
  );
}

export default ListUser;
