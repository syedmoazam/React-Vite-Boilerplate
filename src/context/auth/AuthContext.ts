import {createContext} from "react";
import {AuthContext} from "@context/auth/types";

export default createContext<AuthContext | null>(null);