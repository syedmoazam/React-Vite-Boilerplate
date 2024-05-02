import {object, string, InferType, number} from "yup";

export const userLoginSchema = object({
  email: string().email("Please enter valid email").required("Email is required"),
  password: string().required("Password is required")
})

export type UserLoginPayload = InferType<typeof userLoginSchema>

export const userResponseSchema = object({
  name: string().required(),
  email: string().email().required(),
  token: string().required(),
  role: number().required()
})

export type UserResponse = InferType<typeof userResponseSchema>;