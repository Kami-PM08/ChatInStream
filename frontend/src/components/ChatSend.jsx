import React, { useState } from "react";
import PropTypes from "prop-types";
// Components
import { Button, Form, InputGroup } from "react-bootstrap";

const ChatSend = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const onSend = () => {
    onSubmit(message);
    setMessage("");
  };

  return (
    <InputGroup>
      <Form.Control
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="outline-success" id="button-addon2" onClick={onSend}>
        Send
      </Button>
    </InputGroup>
  );
};

ChatSend.propTypes = {
  onSubmit: PropTypes.func,
};

export default ChatSend;
