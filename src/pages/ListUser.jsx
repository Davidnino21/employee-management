import { useEffect, useState } from "react";
import Search from "../components/Search";
import UserCard from "../components/UserCard";
import DeleteModal from "../components/DeleteModal";

function ListUser() {
  const [employees, setEmployees] = useState([]);
  const [showDelete, setShowDelete] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})

  function toggleDelete(user) {
    
    setShowDelete(!showDelete)
    setSelectedUser(user)
  }

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  async function deleteUserById(id) {
    try {
      const res = fetch(`http://localhost:3000/employees/${id}`,{
        method: "delete"
      })
      const filtered = employees.filter((emp) => emp.id != id)
      setEmployees(filtered)
      setShowDelete(false)
    } catch (error) {
      
    }
  } 

  function filterEmployees(keyword) {
    const filtered = employees.filter((emp) => {
     return emp.name.toLowerCase().includes(keyword.toLowerCase())
    })
    setEmployees(filtered)
  }

  return (
    <>
      <Search filterEmployees={filterEmployees}/>
      <div className="user-container">
        {employees.map((emp) => (
          <UserCard key={emp.id} employee={emp} toggle={toggleDelete}/>
        ))}
      </div>
      <DeleteModal show={showDelete} cancel={toggleDelete} selectedUser={selectedUser} deleteEmployee={deleteUserById}/>
    </>
  );
}

export default ListUser;
