import React, { useContext, useEffect, useState } from "react";
// Components
import { Col } from "react-bootstrap";
import ChatSend from "./ChatSend";
// Sokect
import { io } from "socket.io-client";
// Services
import getMessagesByChat from "../services/message/getMessagesByChat";
// Context
import { UserContext } from "../context/user/UserProvider";
import ChatContent from "./ChatContent";

const socket = io(process.env.REACT_APP_API_URL);

const Chat = () => {
  const { token, user } = useContext(UserContext);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages();
    socket.on("sendMessage", (message) => {
      setMessages(current => [...current, message]);
    });
    return () => {
      socket.off("sendMessage");
    };
  }, []);

  const getMessages = async () => {
    try {
      const { messages } = await getMessagesByChat(token, "0");
      setMessages(messages);
    } catch (error) {
      console.log("Error al traer mensajes: ", error);
    }
  };

  const sendMessage = async (text) => {
    socket.emit("newMessage", { text, token });
  };

  return (
    <Col
      xs={4}
      className="d-flex flex-column border-start border-dark-subtle p-3 justify-content-between bg-svg"
    >
      <Col xs={12} className="border-bottom border-dark-subtle ">
        <p className="h4 text-center text-orange">Bienvenid@ al chat {user}</p>
      </Col>
      <ChatContent user={user} messages={messages} />
      <ChatSend onSubmit={sendMessage} />
    </Col>
  );
};

export default Chat;
