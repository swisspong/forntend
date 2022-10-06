import { useQueryClient } from "@tanstack/react-query";
import { API, refreshReq } from "../lib/axiosPrivate";

const useAxiosPrivate = () => {
  const queryClient = useQueryClient();
  const auth = queryClient.getQueryData(["auth"]);
  useEffect(() => {
    const requestIntercept = API.interceptors.request.use(
      (config) => {
        console.log("useAxisoprivate",auth)
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = API.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const { data: res } = await refreshReq();
          queryClient.setQueryData(["auth"], res.result);
          prevRequest.headers[
            "Authorization"
          ] = `Bearer ${res.result.accessToken}`;
          return API(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      API.interceptors.request.eject(requestIntercept);
      API.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return API;
};
export default useAxiosPrivate;
