function DeleteModal({show, cancel, selectedUser, deleteEmployee}) {
  return (
    <div className="confirm-delete-modal" style={{display: show ? "flex" : "none"}}>
      <div className="modal-content">
        <h3>
          Are you sure you want to delete <span>{selectedUser.name}</span>?
        </h3>
        <p>This action can not be undone</p>
        <div className="modal-actions">
          <button className="delete-btn" onClick={() => deleteEmployee(selectedUser.id)}>Yes</button>
          <button className="cancel-btn" onClick={() => cancel("")}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
