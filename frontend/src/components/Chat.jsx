import React, { useContext, useEffect, useState } from "react";
// Components
import { Col } from "react-bootstrap";
import ChatSend from "./ChatSend";
// Services
import getMessagesByChat from "../services/message/getMessagesByChat";
import createMessage from "../services/message/createMessage";
// Context
import { UserContext } from "../context/user/UserProvider";

const Chat = () => {
  const { token, user } = useContext(UserContext);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    try {
      const messages = await getMessagesByChat(token, "0");
      setMessages(messages);
    } catch (error) {
      console.log("Error al traer mensajes: ", error);
    }
  };

  const sendMessage = async (text) => {
    if (text.length === 0) return;
    try {
      await createMessage(token, { text });
    } catch (error) {
      console.log("Error al enviar mensaje: ", error);
    }
  };

  return (
    <Col
      xs={4}
      className="d-flex flex-column border-start border-dark-subtle p-3 justify-content-between"
    >
      <p>Chat</p>
      <ChatSend onSubmit={sendMessage} />
    </Col>
  );
};

export default Chat;
