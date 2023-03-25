// Components
import { useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
// Context
import { UserContext } from "../context/user/UserProvider";
// Pages
import Login from "../pages/Login";
import Stream from "../pages/Stream";

const Router = () => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route index={!isAuthenticated} element={<Login />} />
        {isAuthenticated && (
          <Route index={isAuthenticated} element={<Stream />} />
        )}
      </Route>
    </Routes>
  );
};

export default Router;
