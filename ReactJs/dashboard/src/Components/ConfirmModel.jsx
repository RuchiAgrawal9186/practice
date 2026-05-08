const ConfirmModel = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal confirm-modal">
        <h3>Delete User</h3>

        <p>Are you sure you want to delete this user?</p>

        <div className="modal-buttons">
          <button className="delete-btn" onClick={onConfirm}>
            Yes Delete
          </button>

          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModel;
