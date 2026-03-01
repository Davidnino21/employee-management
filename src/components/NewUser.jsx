import { MdOutlineCancel } from "react-icons/md";

function NewUser() {
  return (
    <div className="new-user">
      <div className="form-header">
        <h2>Add New User</h2>
        <button>
          <MdOutlineCancel />
        </button>
      </div>
      <form action="">
        <label htmlFor="">Name:</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Phone Number:</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Email:</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Job Title:</label>
        <input type="text" name="" id="" />
      </form>
      <div className="save-btn">
        <button>Save</button>
      </div>
    </div>
  );
}

export default NewUser;
