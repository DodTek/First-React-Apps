function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Are You Sure</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>

      {/* ALSO WOULD HAVE WORKED
      <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
      <button className="btn" onClick={props.onConfirm}>Confirm</button>
       */}
    </div>
  );
}

export default Modal;
