import axios from "axios";
import { useContext } from "react";
import { createContext } from "react";

import { useState } from "react";
import { useEffect } from "react";
import { getLocalStorage } from "../utils/SessionHelper";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // axios config
  axios.defaults.baseURL =
    import.meta.env.VITE_API ||
    "https://kachchi-palace-api-v1.onrender.com/api";

  useEffect(() => {
    const data = getLocalStorage("auth");
    if (data) {
      setAuth({ user: data.user, token: data.token });
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
