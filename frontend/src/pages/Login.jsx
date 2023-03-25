import React, { useContext } from "react";
// Components
import { Container } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
// Context
import { UserContext } from "../context/user/UserProvider";
// Services
import login from "../services/user/login";

const Login = () => {
  const { setUser } = useContext(UserContext);

  const onLogin = async ({ user, password }) => {
    if (user.length === 0 || password.length === 0) return;
    try {
      const token = await login({ user, password });
      setUser(token);
    } catch (error) {
      console.log("Error al ingresar:", error);
    }
  };

  return (
    <Container fluid className="d-flex flex-wrap justify-content-center align-content-center h-full" >
      <LoginForm onSubmit={onLogin} />
    </Container>
  );
};

export default Login;
