import React, { useState } from "react";
import PropTypes from "prop-types";
// Components
import { Button, Col, FloatingLabel, Form } from "react-bootstrap";

const LoginForm = ({ onSubmit }) => {
  const [user, setUser] = useState({ user: "", password: "" });

  const handleChange = (value, field) => {
    setUser({ ...user, [field]: value });
  };

  return (
    <Col
      xs={6}
      className="d-flex flex-wrap h-50 justify-content-evenly align-content-center flex-column shadow rounded-5 text-center"
    >
      <p className="h2">Bienvenid@ de vuelta</p>
      <FloatingLabel controlId="floatingInput" label="Usuario">
        <Form.Control
          value={user.user}
          onChange={(e) => handleChange(e.target.value, "user")}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Contraseña">
        <Form.Control
          type="password"
          value={user.password}
          onChange={(e) => handleChange(e.target.value, "password")}
        />
      </FloatingLabel>
      <Button
        className="col-6"
        variant="outline-success"
        size="lg"
        onClick={() => onSubmit(user)}
      >
        Ingresar
      </Button>
    </Col>
  );
};

LoginForm.prototype = {
  onSubmit: PropTypes.func,
};

export default LoginForm;
