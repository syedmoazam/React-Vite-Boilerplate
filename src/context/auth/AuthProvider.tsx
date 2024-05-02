import {useState} from "react";
import storage from "@constants/storage";
import {UserResponse} from "@schemas/userSchema";
import AuthContext from "@context/auth/AuthContext";
import {deleteItem, setItem} from "@services/storageService";
import {AuthContext as AuthContextType, AuthProvider as AuthProviderType} from "@context/auth/types";

const AuthProvider = ({ children }: AuthProviderType) => {
  const [isAuth, setIsAuth] = useState(false);

  const setUserAuthentication = (isAuthenticated: boolean = false, user?: UserResponse) => {
    setIsAuth(isAuthenticated);
    if (user) {
      setItem(storage.TOKEN, user.token)
    } else {
      deleteItem(storage.TOKEN);
    }
  }

  const providerValues: AuthContextType = { isAuth, setUserAuthentication }

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;