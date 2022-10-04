import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useRefresh } from "../hooks/useAuth";
import HeaderV2 from "./HeaderV2";
import MyFooter from "./MyFooter";
const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});
async function fetchCartByCookieId() {
  const res = await API.get(`/cart/${Cookies.get("cart_id")}`);
  return res.data;
}
const fetchCart = async () => {
  const { data: res } = await API.get("/cart");
  console.log(res);
  return res;
};
function useCart() {
  if (Cookies.get("cart_id")) {
    return useQuery(["cart"], () => fetchCartByCookieId());
  } else {
    return useQuery(["cart"], () => fetchCart());
  }
}
const Layout = ({ children }) => {
  const {data:auth} = useRefresh()
  const { data } = useCart();

  return (
    <>
      <HeaderV2 cart={data} />

      {children}
      <MyFooter />
    </>
  );
};

export default Layout;
