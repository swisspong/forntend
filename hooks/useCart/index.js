import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const fetchCart = async () => {
  const { data: res } = await API.get("/cart");
  console.log(res);
  return res;
};
async function fetchCartByCookieId() {
  const res = await API.get(`/cart/${Cookies.get("cart_id")}`);
  return res.data;
}

export function useCart() {
  if (Cookies.get("cart_id")) {
    return useQuery(["cart"], () => fetchCartByCookieId(), {
      // staleTime: 60000,
      // retryOnMount:false
    });
  } else {
    return useQuery(["cart"], () => fetchCart(), {
      staleTime: 60000,
    });
  }
}

export const useAddToCartMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (cartItem) => API.post(`/cart/${Cookies.get("cart_id")}`, cartItem),
    {
      // When mutate is called:
      onMutate: async (cartItem) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(["cart"]);

        // Snapshot the previous value
        const previousTodos = queryClient.getQueryData(["cart"]);

        // Optimistically update to the new value
        // if (previousTodos) {
        //   queryClient.setQueryData(['cart'], {
        //     ...previousTodos,
        //     items: [
        //       ...previousTodos.items,
        //       { id: Math.random().toString(), text: cartItem },
        //     ],
        //   })
        // }

        return { previousTodos };
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (err, variables, context) => {
        if (context?.previousTodos) {
          queryClient.setQueryData(["cart"], context.previousTodos);
        }
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(["cart"]);
      },
    }
  );
};
export const useRemoveItemCartMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (productId) =>
      API.delete(`/cart/${Cookies.get("cart_id")}/items/${productId}`),
    {
      // When mutate is called:
      onMutate: async (cartItem) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(["cart"]);

        // Snapshot the previous value
        const previousTodos = queryClient.getQueryData(["cart"]);

        // Optimistically update to the new value
        // if (previousTodos) {
        //   queryClient.setQueryData(['cart'], {
        //     ...previousTodos,
        //     items: [
        //       ...previousTodos.items,
        //       { id: Math.random().toString(), text: cartItem },
        //     ],
        //   })
        // }

        return { previousTodos };
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (err, variables, context) => {
        if (context?.previousTodos) {
          queryClient.setQueryData(["cart"], context.previousTodos);
        }
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(["cart"]);
      },
    }
  );
};
export const useEmptyCartMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    () => API.delete(`/cart/${Cookies.get("cart_id")}/items`),
    {
      // When mutate is called:
      onMutate: async (cartItem) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(["cart"]);

        // Snapshot the previous value
        const previousTodos = queryClient.getQueryData(["cart"]);

        // Optimistically update to the new value
        // if (previousTodos) {
        //   queryClient.setQueryData(['cart'], {
        //     ...previousTodos,
        //     items: [
        //       ...previousTodos.items,
        //       { id: Math.random().toString(), text: cartItem },
        //     ],
        //   })
        // }

        return { previousTodos };
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (err, variables, context) => {
        if (context?.previousTodos) {
          queryClient.setQueryData(["cart"], context.previousTodos);
        }
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(["cart"]);
      },
    }
  );
};
export const useUpdateItemCartMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (cartItem) => API.put(`/cart/${Cookies.get("cart_id")}`, cartItem),
    {
      // When mutate is called:
      onMutate: async (cartItem) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(["cart"]);

        // Snapshot the previous value
        const previousTodos = queryClient.getQueryData(["cart"]);

        // Optimistically update to the new value
        // if (previousTodos) {
        //   queryClient.setQueryData(['cart'], {
        //     ...previousTodos,
        //     items: [
        //       ...previousTodos.items,
        //       { id: Math.random().toString(), text: cartItem },
        //     ],
        //   })
        // }

        return { previousTodos };
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (err, variables, context) => {
        if (context?.previousTodos) {
          queryClient.setQueryData(["cart"], context.previousTodos);
        }
      },
      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(["cart"]);
      },
    }
  );
};
