import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});
export const useAddOrderMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (order) => API.post(`/order/${Cookies.get("cart_id")}`, order),
    {
      // When mutate is called:
      onMutate: async (order) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(["order"]);

        // Snapshot the previous value
        const previousOrders = queryClient.getQueryData(["order"]);

        // Optimistically update to the new value
        // if (previousOrders) {
        //   queryClient.setQueryData(['cart'], {
        //     ...previousOrders,
        //     items: [
        //       ...previousOrders.items,
        //       { id: Math.random().toString(), text: cartItem },
        //     ],
        //   })
        // }

        return { previousOrders };
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (err, variables, context) => {
        if (context?.previousOrders) {
          queryClient.setQueryData(["order"], context.previousOrders);
        }
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(["order"]);
      },
    }
  );
};
