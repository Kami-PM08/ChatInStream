import React, { useContext } from "react";
// Components
import { Button } from "react-bootstrap";
// Context
import { UserContext } from "../context/user/UserProvider";

const FloatLogoutButton = () => {
  const { resetUser } = useContext(UserContext);
  return (
    <div className="fixed-bottom m-4 w-fit-content" >
      <Button variant="outline-danger" onClick={resetUser}>
        Cerrar sesión
      </Button>
    </div>
  );
};

export default FloatLogoutButton;
