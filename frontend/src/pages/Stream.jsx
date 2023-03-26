import React from "react";
// Components
import { Col } from "react-bootstrap";
import Chat from "../components/Chat";
import FloatLogoutButton from "../components/FloatLogoutButton";

const Stream = () => {
  return (
    <div className="vh-100 d-flex">
      <Col xs={8} className="d-flex align-items-center" >
        <iframe
          className="vh-85 px-3 rounded-5 w-100"
          src="https://www.youtube.com/embed/5jaT_8hy3Vg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Col>
      <Chat />
      <FloatLogoutButton />
    </div>
  );
};

export default Stream;
