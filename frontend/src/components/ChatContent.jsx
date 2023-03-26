import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
// Components
import { Col } from "react-bootstrap";
import ChatMessage from "./ChatMessage";

const ChatContent = ({ messages }) => {
  const bottom = useRef(null);

  useEffect(() => {
    bottom.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Col xs={12} className="d-flex flex-column justify-content-end vh-85">
      <Col xs={12} className="d-flex flex-column overflow-auto h-100">
        {messages &&
          messages.map((message) => <ChatMessage key={message._id} message={message} />)}
        <div ref={bottom} />
      </Col>
    </Col>
  );
};

ChatContent.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};

export default ChatContent;
