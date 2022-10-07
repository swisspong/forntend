import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectCredential } from "../../features/auth/authSlice";

import {
  addAddressReq,
  addressReq,
  API,
  deleteAddressReq,
  updateAddressReq,
  updateBioReq,
} from "../../lib/axiosPrivate";
async function fetchAddress(id) {
  const res = await addressReq(id);
  return res.data;
}
export function useAddressQuery() {
  const credential = useSelector(selectCredential);
  console.log("auth", credential);
  // return useQuery(["address"], () => fetchAddress(credential.user.id), {
  return useQuery(["address"], () => fetchAddress(credential.user.id), {
    enabled: credential?.user ? true : false,
    retry: false,
  });
}
export const useEditBioMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((body) => updateBioReq(body.id,body.values), {
    onMutate: async (newUserBio) => {
      await queryClient.cancelQueries(["auth"]);
      const previousTodos = queryClient.getQueryData(["auth"]);
      return { previousTodos };
    },
    onError: (err, variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(["auth"], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(["auth"]);
    },
  });
};
export const useAddAddressMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((body) => addAddressReq(body.id, body), {
    onMutate: async (newAddress) => {
      await queryClient.cancelQueries(["address"]);
      const previousTodos = queryClient.getQueryData(["address"]);
      return { previousTodos };
    },
    onError: (err, variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(["address"], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(["address"]);
    },
  });
};
export const useEditAddressMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((body) => updateAddressReq(body.id, body), {
    onMutate: async (newAddress) => {
      await queryClient.cancelQueries(["address"]);
      const previousTodos = queryClient.getQueryData(["address"]);
      return { previousTodos };
    },
    onError: (err, variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(["address"], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(["address"]);
    },
  });
};
export const useDeleteAddressMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((id) => deleteAddressReq(id), {
    onMutate: async (newAddress) => {
      await queryClient.cancelQueries(["address"]);
      const previousTodos = queryClient.getQueryData(["address"]);
      return { previousTodos };
    },
    onError: (err, variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(["address"], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(["address"]);
    },
  });
};
