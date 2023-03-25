import { createContext, useReducer } from "react";
import jwt_decode from "jwt-decode";
import { userReducer } from "./userReducer";

export const INITIAL_STATE = {
  user: "",
  userRole: "",
  token: "",
  isAuthenticated: false,
};

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setUser = (token) => {
    const { user, userRole } = jwt_decode(token);
    dispatch({ type: "setUser", payload: { token, user, userRole } });
  };

  const resetUser = () => {
    dispatch({ type: "resetUser", payload: INITIAL_STATE });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        setUser,
        resetUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
