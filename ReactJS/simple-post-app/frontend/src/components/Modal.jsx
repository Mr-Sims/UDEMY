import { useNavigate } from "react-router-dom";
import classes from "./Modal.module.css";

function Modal({ children }) {
  const navigation = useNavigate()

  function closeModalHandler() {
    navigation('/');
  }
 
  return (
    <>
      <div className={classes.backdrop} onClick={closeModalHandler}/>
      <dialog open className={classes.modal}>{children}</dialog>
    </>
  );
}

export default Modal;
