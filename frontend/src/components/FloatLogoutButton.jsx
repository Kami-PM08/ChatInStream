import React, { useContext } from "react";
// Components
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
// Context
import { UserContext } from "../context/user/UserProvider";
// Icons
import { BoxArrowLeft } from "react-bootstrap-icons";

const FloatLogoutButton = () => {
  const { resetUser } = useContext(UserContext);
  return (
    <div className="fixed-bottom m-4 w-fit-content">
      <OverlayTrigger placement="right" overlay={<Tooltip>Cerrar sesión</Tooltip>}>
        <Button
          variant="outline-danger rounded-circle ps-2"
          onClick={resetUser}
        >
          <BoxArrowLeft size={20} />
        </Button>
      </OverlayTrigger>
    </div>
  );
};

export default FloatLogoutButton;
