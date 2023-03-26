import React, { useContext, useState } from "react";
// Components
import { Container } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
// Context
import { UserContext } from "../context/user/UserProvider";
// Services
import createUser from "../services/user/createUser";
import login from "../services/user/login";

const Login = () => {
  const { setUser } = useContext(UserContext);

  const [registered, setRegistered] = useState(true);

  const onLogin = async ({ user, password }) => {
    if (user.length === 0 || password.length === 0) return;
    try {
      const token = await login({ user, password });
      setUser(token);
    } catch (error) {
      console.log("Error al ingresar:", error);
    }
  };

  const onSignUp = async (form) => {
    if (
      form.user.length === 0 ||
      form.password.length === 0 ||
      form.name.length === 0 ||
      form.role.length === 0
    )
      return;
    try {
      await createUser(form);
      const token = await login({ user: form.user, password: form.password });
      setUser(token);
    } catch (error) {
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
    </Container>
  );
};

export default Login;
