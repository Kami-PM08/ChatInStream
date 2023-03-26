import React, { useState } from "react";
import PropTypes from "prop-types";
// Components
import { Button, Form, InputGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
// Icons
import { SendFill } from "react-bootstrap-icons";

const ChatSend = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const onSend = () => {
    onSubmit(message);
    setMessage("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSend();
    }
  };

  return (
    <InputGroup>
      <Form.Control
        placeholder="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <OverlayTrigger
        overlay={<Tooltip>Enviar mensaje</Tooltip>}
      >
        <Button variant="outline-success" id="button-addon2" onClick={onSend}>
          <SendFill />
        </Button>
      </OverlayTrigger>
    </InputGroup>
  );
};

ChatSend.propTypes = {
  onSubmit: PropTypes.func,
};

export default ChatSend;
