import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useContext} from "react";
import AuthContext from "@context/auth/AuthContext";
import { AuthContext as AuthContextType } from "@context/auth/types";
import {loginUser} from "@network/network";
import Storage from "@constants/storage";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {UserLoginPayload, userLoginSchema} from "@schemas/userSchema";

const useLoginContainer = () => {
  const queryClient = useQueryClient();
  //Todo: Replace with useStartupContainer
  const { setUserAuthentication } = useContext(AuthContext) as AuthContextType;
  const { mutate: login } = useMutation({
    mutationFn: loginUser,
    onSuccess: (userData) => {
      queryClient.setQueryData([Storage.USER], userData);
      setUserAuthentication(true, userData);
    }
  })

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(userLoginSchema) })

  const onSubmit = (payload: UserLoginPayload) => {
    console.log("payload", payload);
    login(payload)
  }

  return {
    register,
    control,
    errors,
    onSubmit: handleSubmit(onSubmit)
  }
}

export default useLoginContainer;