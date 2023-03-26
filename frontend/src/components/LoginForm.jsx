import React, { useState } from "react";
import PropTypes from "prop-types";
// Components
import { Button, Col, FloatingLabel, Form } from "react-bootstrap";

const roles = [
  { value: "MODERATOR", label: "Moderador" },
  { value: "STUDENT", label: "Estudiante" },
];
const initialState = { user: "", password: "", name: "", role: "" };

const LoginForm = ({ onSubmit, registered, handleForm }) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (value, field) => {
    setForm({ ...form, [field]: value });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSubmit(form);
    }
  };

  return (
    <Col
      xs={5}
      className="d-flex flex-wrap vh-65 justify-content-evenly align-content-center flex-column shadow rounded-5 text-center mb-4 bg-svg"
    >
      <p className="h2 text-orange">
        {registered ? "Bienvenid@ de vuelta" : "Bienvenid@, registrese"}
      </p>
      {!registered && (
        <>
          <FloatingLabel controlId="floatingName" label="Nombre">
            <Form.Control
              value={form.name}
              onChange={(e) => handleChange(e.target.value, "name")}
              onKeyDown={handleKeyPress}
            />
          </FloatingLabel>
          <Form.Select
            className="w-fit-content"
            onChange={(e) => handleChange(e.target.value, "role")}
          >
            <option value="">Selecciona tu rol</option>
            {roles.map((role) => (
              <option key={role.value} value={role.value}>{role.label}</option>
            ))}
          </Form.Select>
        </>
      )}
      <FloatingLabel controlId="floatingUser" label="Usuario">
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
      <Button variant="link" onClick={handleForm}>
        {registered ? "No tengo una cuenta" : "Ya tengo una cuenta"}
      </Button>
      <Button
        className="col-6"
        variant="outline-success"
        size="lg"
        onClick={() => onSubmit(form)}
      >
        {registered ? "Ingresar" : "Registrarse"}
      </Button>
    </Col>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  registered: PropTypes.bool,
  handleForm: PropTypes.func,
};

export default LoginForm;
