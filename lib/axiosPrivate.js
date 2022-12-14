import axios from "axios";
import Cookies from "js-cookie";
import { store } from "../app/store";
import { login, logout } from "../features/auth/authSlice";
export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const privateAPI = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});
privateAPI.interceptors.request.use((req) => {
  if (store.getState().auth?.credential?.accessToken) {
    console.log("intercep", store.getState().auth.credential.accessToken);
    req.headers.Authorization = `Bearer ${
      store.getState().auth.credential.accessToken
    }`;
  }

  return req;
});
privateAPI.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    // Access Token was expired
    if (err.response.status === 403 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        // store.dispatch({ type: AUTH_LOGIN_REQUEST });
        store.dispatch(logout());
        const { data: res } = await refreshReq();
        console.log("inter", res.result);
        store.dispatch(login(res.result));
        return privateAPI(originalConfig);
      } catch (_error) {
        return Promise.reject(_error);
      }
    }

    return Promise.reject(err);
  }
);

export const refreshReq = () => privateAPI.get("/auth/refresh");
export const logoutReq = () => privateAPI.post("/auth/signout");
export const addressReq = (id) => privateAPI.get(`/user/address/${id}`);
export const orderReq = () => privateAPI.get(`/user/order`);
export const orderByIdReq = (id) => privateAPI.get(`/user/order/${id}`);
export const addAddressReq = (id, body) =>
  privateAPI.post(`/user/address/${id}`, body);
export const updateAddressReq = (id, body) =>
  privateAPI.put(`/user/address/${id}`, body);
export const deleteAddressReq = (id) =>
  privateAPI.delete(`/user/address/${id}`);
export const updateBioReq = (id, body) => privateAPI.put(`/user/${id}`, body);
export const createOrderCODAuthReq = (userId, body) =>
  privateAPI.post(`/order/${Cookies.get("cart_id")}/user/${userId}`, body);
export const addSlipReq = (body) => privateAPI.post(`/assets/slip`, body);
export const editOrderSlipReq = (id,body) => privateAPI.put(`/order/${id}`, body);
