import React from "react";
import PropTypes from "prop-types";
// Components
import { Col } from "react-bootstrap";
import ChatMessage from "./ChatMessage";

const ChatContent = ({ user }) => {
  return (
    <>
      <Col xs={12} className="border-bottom border-dark-subtle">
        <p className="h4 text-center">Bienvenid@ al chat {user}</p>
      </Col>
      <Col xs={12}>
        <ChatMessage />
      </Col>
    </>
  );
};

ChatContent.propTypes = {
  user: PropTypes.string,
};

export default ChatContent;
