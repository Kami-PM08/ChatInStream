import React from "react";
import PropTypes from "prop-types";
// Components
import { Toast } from "react-bootstrap";

const ErrorToast = ({ open, handleOpen, content: {title, text} }) => {
  return (
    <Toast className="position-absolute mt-4" onClose={handleOpen} show={open} delay={3000} autohide >
      <Toast.Header>
        <strong className="me-auto text-danger">{title}</strong>
      </Toast.Header>
      <Toast.Body>{text}</Toast.Body>
    </Toast>
  );
};

ErrorToast.propTypes = {
  open: PropTypes.bool,
  handleOpen: PropTypes.func,
  content: PropTypes.objectOf(PropTypes.string)
};

export default ErrorToast;
