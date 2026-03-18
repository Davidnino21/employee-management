import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SiMinutemailer } from "react-icons/si";
import "./details.css";

function UserDetail() {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/employees/${id}`)
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);

  if (!employee) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="page-container">
      <div className="details-container">
        <div className="header-details">
          <img src={employee.avatar} alt="" />
          <h2>{employee.name}</h2>
        </div>
        <div className="headings">
          <h3>Contact Information:</h3>
          <p>Phone Number: {employee.phone}</p>
          <p>Work Location: {employee.address}</p>
          <p>
            <SiMinutemailer /> <span>Email: {employee.email}</span>
          </p>
        </div>
        <div className="headings">
          <h3>Job Details:</h3>
          <p>Business Title: {employee.title}</p>
          <p>Hire Date: {employee.hire}</p>
        </div>
      </div>
        <div className="education">
          <h3>Education:</h3>
          <p>{employee.education}</p>
          <p>{employee.note}</p>
        </div>
    </div>
  );
}

export default UserDetail;
