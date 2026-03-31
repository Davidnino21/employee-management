import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";

function UpdateUser() {
  const [data, setData] = useState({
    avatar: "",
    name: "",
    phone: "",
    email: "",
    title: "",
  });

  const [message, setMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/employees/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/employees/${id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setMessage("User updated");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="edit-container">
      <form className="edit-form" onSubmit={handleSubmit}>
        <label className="avatar" htmlFor="">Avatar:</label>
        <img src={data.avatar} alt="" />
        <input
          type="url"
          name="avatar"
          onChange={handleChange}
          value={data.avatar}
        />
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id=""
          onChange={handleChange}
          value={data.name}
        />

        <label htmlFor="">Phone Number:</label>
        <input
          type="text"
          name="phone"
          id=""
          onChange={handleChange}
          value={data.phone}
        />
        <label htmlFor="">Email:</label>
        <input
          type="text"
          name="email"
          id=""
          onChange={handleChange}
          value={data.email}
        />
        <label htmlFor="">Job Title:</label>
        <input
          type="text"
          name="title"
          id=""
          onChange={handleChange}
          value={data.title}
        />
        <div>
          <p>{message}</p>
        </div>
        <div className="save-btn">
          <button>Save</button>
         <Link to="/">Go Home</Link>
        </div>
      </form>
    </div>
  );
}

export default UpdateUser;
