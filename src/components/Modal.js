// import React, { useState } from "react";
import classes from "./Modal.module.css";
//and just like importing from {} we can direcrly import the children prop with {} the children keyword is exclusive though
//the self closing div is simply there to provide us a backround
//children is the comp that is passed between open and closing tag
function Modal({ children, onClose }) {
  return (
    <>
      <div onClick={onClose} className={classes.backdrop} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
