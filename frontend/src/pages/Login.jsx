import React, { useContext, useState } from "react";
// Components
import { Container } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import ErrorToast from "../components/ErrorToast";
// Context
import { UserContext } from "../context/user/UserProvider";
// Services
import createUser from "../services/user/createUser";
import login from "../services/user/login";

const Login = () => {
  const { setUser } = useContext(UserContext);

  const [registered, setRegistered] = useState(true);

  const [open, setOpen] = useState(false);
  const [error, setError] = useState({ title: "", text: "" });

  const handleOpen = () => setOpen(!open);

  const onLogin = async ({ user, password }) => {
    if (user.length === 0 || password.length === 0) {
      setError({
        title: "Error al iniciar sesión: ",
        text: "Todos los campos son requeridos.",
      });
      handleOpen();
      return;
    }
    try {
      const token = await login({ user, password });
      setUser(token);
    } catch (error) {
      console.log("Error al ingresar:", error);
      setError({
        title: "Error al iniciar sesión: ",
        text: error.response.data.msg,
      });
      handleOpen();
    }
  };

  const onSignUp = async (form) => {
    if (
      form.user.length === 0 ||
      form.password.length === 0 ||
      form.name.length === 0 ||
      form.role.length === 0
    ) {
      setError({
        title: "Error al registrarse: ",
        text: "Todos los campos son requeridos.",
      });
      handleOpen();
      return;
    }
    try {
      await createUser(form);
      const token = await login({ user: form.user, password: form.password });
      setUser(token);
    } catch (error) {
      setError({
        title: "Error al registrarse: ",
        text: error.response.data.msg,
      });
      console.log("Error al ingresar:", error);
    }
  };

  return (
    <Container
      fluid
      className="d-flex flex-wrap justify-content-center align-content-center vh-100"
    >
      <LoginForm
        onSubmit={registered ? onLogin : onSignUp}
        registered={registered}
        handleForm={() => setRegistered(!registered)}
      />
      <ErrorToast open={open} handleOpen={() => setOpen(!open)} content={error} />
    </Container>
  );
};

export default Login;
