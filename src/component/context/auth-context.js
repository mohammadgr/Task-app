import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuth: false,
  login: () => {}
});

const AuthContextProvider = (props) => {
  const [isLeggedIn, setIsLoggedIn] = useState(false);

  const logginHandler = () => {
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth: isLeggedIn,
        login: logginHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
