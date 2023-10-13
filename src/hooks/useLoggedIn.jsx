import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthProvider";

const useLoggedIn = () => {
  const [auth] = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (auth.token && auth.user) {
      setIsLoggedIn(true);
    }
  }, [auth]);
  return isLoggedIn;
};

export default useLoggedIn;
