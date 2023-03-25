
// Components
import { Outlet, Route, Routes } from "react-router-dom";
// Pages
import Login from "../pages/Login";
import Stream from "../pages/Stream";

const Router = () => {

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
        <Route index element={<Login />} />
        <Route path="/stream" element={<Stream />} />
      </Route>
    </Routes>
  );
};

export default Router;
