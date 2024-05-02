import {useContext, useEffect} from "react";
import {useQuery} from "@tanstack/react-query";

import {getUser} from "@network/network";
import storage from "@constants/storage";
import AuthContext from "@context/auth/AuthContext";
import { AuthContext as AuthContextType } from "@context/auth/types";

const UseStartupContainer = () => {
  const { isAuth, setUserAuthentication } = useContext(AuthContext) as AuthContextType;
  const { data: user, isLoading } = useQuery({ queryKey: [storage.USER], queryFn: getUser, retry: false });

  useEffect(() => {
    if (!isLoading && user) {
      setUserAuthentication(true, user)
    }
  }, [user, isLoading, setUserAuthentication])

  return {
    isAuth,
    user
  }
}

export default UseStartupContainer;