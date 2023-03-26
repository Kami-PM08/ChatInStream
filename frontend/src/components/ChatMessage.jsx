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
        user === message.user ? "align-self-end no-rounded-bottom-end" : "no-rounded-bottom-start",
      color:
        message.userRole === "MODERATOR"
          ? " bg-orange text-white"
          : user === message.user
          ? " bg-body-tertiary"
          : " bg-body-secondary",
    },
  };

  return (
    <Col
      key={message._id}
      xs={7}
      className={
        "m-2 rounded-4 bg-opacity-75 " + classes.container.layout + classes.container.color
      }
    >
      <p className={"fw-light mb-0 px-2"}>
        {message.user}
        {message.userRole === "MODERATOR" && (
          <span className="float-end">Moderador</span>
        )}
      </p>
      <p className={"mb-1 px-3"}>{message.text}</p>
      <p className={"fst-italic fw-light px-2 mb-0"}>
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
