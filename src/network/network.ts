import apiService from "@services/apiService";
import API_URLS from "@constants/apiUrls";
import {UserLoginPayload, userResponseSchema} from "@schemas/userSchema";

export const getUser = async () => {
  const { ok, data, response } = await apiService.get(API_URLS.AUTH.ME);
  if (ok) {
    return userResponseSchema.validate(data);
  }
  throw response.message;
}

export const loginUser = async (payload: UserLoginPayload) => {
  const { ok, data, response } = await apiService.post(API_URLS.AUTH.LOGIN, payload);
  if (ok) {
    return userResponseSchema.validate(data)
  }
  throw response.message;
}