import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { API, refreshReq } from "../../lib/axiosPrivate";

async function fetchRefresh() {
  const res = await API.get(`/auth/refresh`);
  return res.data;
}

export function useRefresh() {
  const queryClient = useQueryClient();
  return useQuery(["auth"], () => fetchRefresh(), {
    onSuccess: (data) => {
      console.log(data.result);
      queryClient.setQueryData(["auth"], data.result);
    },
    retry: false,
    staleTime: 60000,
  });
}
export function usePrivate() {
  const queryClient = useQueryClient();
  const auth = queryClient.getQueryData(["auth"]);
  API.interceptors.request.use((req) => {
    if (auth?.accessToken) {
      req.headers.Authorization = `Bearer ${auth.accessToken}`;
    }

    return req;
  });
  API.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      // Access Token was expired
      if (err.response.status === 403 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const { data: res } = await refreshReq();
          queryClient.setQueryData(["auth"], res.result);

          return API(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }

      return Promise.reject(err);
    }
  );
}
export const useSignupMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((body) => API.post(`/auth/signup`, body), {
    // When mutate is called:
    onMutate: async (credential) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(["auth"]);

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData(["auth"]);

      // Optimistically update to the new value
      // if (previousTodos) {
      //   queryClient.setQueryData(['auth'], {
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
        queryClient.setQueryData(["auth"], context.previousTodos);
      }
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(["auth"]);
    },
  });
};
export const useSigninMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((body) => API.post(`/auth/signin`, body), {
    // When mutate is called:
    onSuccess: (data) => {
      queryClient.setQueryData(["auth"], data.data.result);
    },
    onMutate: async (credential) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(["auth"]);

      // Snapshot the previous value
      const previousTodos = queryClient.getQueryData(["auth"]);

      // Optimistically update to the new value
      // if (previousTodos) {
      //   queryClient.setQueryData(['auth'], {
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
        queryClient.setQueryData(["auth"], context.previousTodos);
      }
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(["auth"]);
    },
  });
};
