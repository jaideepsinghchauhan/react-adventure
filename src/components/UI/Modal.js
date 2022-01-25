import React from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children}</div>
    </div>
  );
};

const Modal = (props) => {
    const portalElement = document.getElementById('overlays')
    return <React.Fragment >
                {ReactDom.createPortal(<Backdrop/>, portalElement )}
                {ReactDom.createPortal(<ModalOverlay> {props.children}</ModalOverlay>, portalElement )}
    </React.Fragment>
};

export default Modal;
