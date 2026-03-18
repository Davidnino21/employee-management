function DeleteModal({show, cancel, selectedName}) {
  return (
    <div className="confirm-delete-modal" style={{display: show ? "flex" : "none"}}>
      <div className="modal-content">
        <h3>
          Are you sure you want to delete <span>{selectedName}</span>?
        </h3>
        <p>This action can not be undone</p>
        <div className="modal-actions">
          <button className="delete-btn">Yes</button>
          <button className="cancel-btn" onClick={cancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
