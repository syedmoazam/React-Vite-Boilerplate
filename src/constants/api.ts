export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL,
}

export const CONTENT_TYPE = {
  JSON: "application/json",
  FORM_DATA: "multipart/form-data",
};

export const STALE_TIME =  60 * 1000

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
  PAYLOAD_TOO_LARGE: 413,
};