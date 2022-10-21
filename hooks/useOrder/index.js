import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { selectCredential } from "../../features/auth/authSlice";

import { addSlipReq, editOrderSlipReq } from "../../lib/axiosPrivate";
// async function fetchAddress(id) {
//   const res = await addressReq(id);
//   return res.data;
// }
// async function fetchOrders() {
//   const res = await orderReq();
//   return res.data;
// }
// async function fetchOrderById(id) {
//   const res = await orderByIdReq(id);
//   return res.data;
// }

export const useAddSlipMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((body) => addSlipReq(body), {
    onMutate: async (newAddress) => {
      await queryClient.cancelQueries(["slip"]);
      const previousTodos = queryClient.getQueryData(["slip"]);
      return { previousTodos };
    },
    onError: (err, variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(["slip"], context.previousTodos);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(["slip"]);
    },
  });
};

export const useEditOrderSlipMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((body) => editOrderSlipReq(body.id, body.values), {
    onMutate: async (newUserBio) => {
      console.log("slip mutate", newUserBio);
      await queryClient.cancelQueries(["order", newUserBio.id]);
      const previousTodos = queryClient.getQueryData(["order", newUserBio.id]);
      return { previousTodos, newUserBio };
    },
    onError: (err, newUserBio, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(
          ["order", context.newUserBio.id],
          context.previousTodos
        );
      }
    },

    onSettled: (newUserBio) => {
      console.log("onsettle", newUserBio);
      console.log("test", newUserBio.data.result.orderId.toString());
      queryClient.invalidateQueries([
        "order",
        newUserBio.data.result.orderId.toString(),
      ]);
    },
  });
};
