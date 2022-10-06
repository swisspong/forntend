import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectCredential } from "../../features/auth/authSlice";

import { addressReq, API } from "../../lib/axiosPrivate";


async function fetchAddress(userId) {
  const res = await addressReq(userId);
  return res.data;
}

export function useAddressQuery() {
  const credential = useSelector(selectCredential);
  console.log("auth", credential);
  return useQuery(["address"], () => fetchAddress(credential.user.id), {

    enabled: credential?.user ? true : false,
    retry:false
  });
}
