import React, { useContext } from "react";
import PropTypes from "prop-types";
// Components
import { Col } from "react-bootstrap";
// Context
import { UserContext } from "../context/user/UserProvider";

const ChatMessage = ({ message }) => {
  const { user } = useContext(UserContext);

  const date = new Date(message.created);

  const classes = {
    container: {
      layout:
        user === message.user ? "align-self-end rounded-end" : "rounded-start",
      color:
        message.userRole === "MODERATOR"
          ? " bg-warning-subtle"
          : user === message.user
          ? " bg-dark-subtle"
          : " bg-body-secondary",
    },
  };

  return (
    <Col
      key={message._id}
      xs={7}
      className={
        "m-2 rounded-4 " + classes.container.layout + classes.container.color
      }
    >
      <p className={"fs-6 fw-bold mb-0 px-2"}>
        {message.user}
        {message.userRole === "MODERATOR" && (
          <span className="float-end text-danger">Moderador</span>
        )}
      </p>
      <p className={"fs-5 mb-1 px-2"}>{message.text}</p>
      <p className={"fs-6 fst-italic px-2 mb-0"}>
        {date.getHours() +
          ":" +
          (date.getMinutes().toString().length === 1
            ? "0" + date.getMinutes()
            : date.getMinutes())}
      </p>
    </Col>
  );
};

ChatMessage.propTypes = {
  message: PropTypes.object,
  user: PropTypes.string,
};

export default ChatMessage;
