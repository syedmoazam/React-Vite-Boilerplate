import {UserResponse} from "@schemas/userSchema";
import {ReactNode} from "react";

export interface AuthContext {
  isAuth: boolean;
  setUserAuthentication: (isAuthenticated?: boolean, user?: UserResponse) => void
}

export interface AuthProvider {
  children: ReactNode
}