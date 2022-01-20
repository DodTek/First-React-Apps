import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./backdrop";

{
  /* Component Functions need to start with a captial letter as it is how react differencates between html tags and react function tags */
}

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/*{modalIsOpen ? <Modal /> : null}  If modalIsOpen true show Modal else null */}
      {/*&& means if both statements are true return second statement (^same as above^)*/}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {/*
      Because we cant use html functions like onClick in custon Jsx Tags 
      We sends closeModalHandler result (setModalIsOpen) to backdrop.js 
      Then when the backdrop div is clicked we set modalIsOpen to FALSE
      Same goes for modal buttons we send params to modal.js to remove it.
      */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

{
  /* Allows Todo to be called outside this File */
}
export default Todo;
