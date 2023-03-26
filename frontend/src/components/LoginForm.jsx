import React, { useState } from "react";
import PropTypes from "prop-types";
// Components
import { Button, Col, FloatingLabel, Form } from "react-bootstrap";

const LoginForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ user: "", password: "" });

  const handleChange = (value, field) => {
    setForm({ ...form, [field]: value });
  };

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      onSubmit(form);
    }
  }

  return (
    <Col
      xs={6}
      className="d-flex flex-wrap h-50 justify-content-evenly align-content-center flex-column shadow rounded-5 text-center"
    >
      <p className="h2">Bienvenid@ de vuelta</p>
      <FloatingLabel controlId="floatingInput" label="Usuario">
        <Form.Control
          value={form.user}
          onChange={(e) => handleChange(e.target.value, "user")}
          onKeyDown={handleKeyPress}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Contraseña">
        <Form.Control
          type="password"
          value={form.password}
          onChange={(e) => handleChange(e.target.value, "password")}
          onKeyDown={handleKeyPress}
        />
      </FloatingLabel>
      <Button
        className="col-6"
        variant="outline-success"
        size="lg"
        onClick={() => onSubmit(form)}
      >
        Ingresar
      </Button>
    </Col>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default LoginForm;
