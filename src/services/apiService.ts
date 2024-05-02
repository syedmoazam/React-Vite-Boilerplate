import {ApiResponse, ApisauceConfig, create} from "apisauce";
import {API_CONFIG, CONTENT_TYPE, HTTP_STATUS} from "@constants/api";
import {getValue, isEmpty} from "@utils/utils";
import STORAGE_KEY from "@constants/storage";

const apiSauceInstance = create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    "Content-Type": CONTENT_TYPE.JSON
  }
})

const handleResponse = (response: ApiResponse<any>) => {
  const mutatedResponse = {
    ok: response.ok,
    status: response.status,
    response: {
      code: getValue(
        response.data,
        "response.code",
        HTTP_STATUS.SERVER_ERROR
      ),
      //data: response?.data?.data,
      message: getValue(
        response.data,
        "response.message",
        "Something went wrong"
      ),
      errorCode: getValue(
        response.data,
        "response.errorCode",
        HTTP_STATUS.BAD_REQUEST
      ),
    },
  };
  const data = getValue(response.data, "data", response.data);

  if (response.status === HTTP_STATUS.UNAUTHORIZED) {
    // queryClient.resetQueries([STORAGE_CONST.GET_USER]);
    // snackbarService.fail('You are not authorized to perform this action');
    return {
      ...mutatedResponse,
      data: !isEmpty(data) ? data : null,
    };
  }
  if (response.status === HTTP_STATUS.SERVER_ERROR) {
    // snackbarService.fail('Something went wrong');
    return {
      ...mutatedResponse,
      data: !isEmpty(data) ? data : null,
    };
  }
  if (response.ok) {
    return { ...mutatedResponse, data };
  } else {
    return {
      ...mutatedResponse,
      data: !isEmpty(data) ? data : null,
    };
  }
}

const get = async (url: string, queryParams?: object, config?: ApisauceConfig) => {
  const response = await apiSauceInstance.get(url, queryParams, config);
  return handleResponse(response)
}

const post = async (url: string, data: object, config?: ApisauceConfig) => {
  const response = await apiSauceInstance.post(url, data, config);
  return handleResponse(response);
}

const put = async (url: string, data: object, config?: ApisauceConfig) => {
  const response = await apiSauceInstance.put(url, data, config);
  return handleResponse(response);
}

const deleteReq = async (url: string, data: object, config?: ApisauceConfig) => {
  const response = await apiSauceInstance.delete(url, data, config);
  return handleResponse(response);
}

apiSauceInstance.addRequestTransform((request) => {
  const token = localStorage.getItem(STORAGE_KEY.TOKEN);
  if (!request.headers) request.headers = {};
  request.headers["Authorization"] = `${token}`;
});

export default {
  get,
  post,
  put,
  delete: deleteReq
}