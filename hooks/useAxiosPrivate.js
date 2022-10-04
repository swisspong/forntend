// import { useQueryClient } from "@tanstack/react-query";
// import { API } from "../lib/axiosPrivate";
// import { useRefresh } from "./useAuth";

// const useAxiosPrivate = () => {
//   const { data: refresh } = useRefresh();
//   const queryClient = useQueryClient();
//   const auth =queryClient.getQueryData(["auth"])
//   useEffect(() => {
//     const requestIntercept = API.interceptors.request.use(
//       (config) => {
//         if (!config.headers["Authorization"]) {
//           config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     const responseIntercept = API.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         const prevRequest = error?.config;
//         if (error?.response?.status === 403 && !prevRequest?.sent) {
//           prevRequest.sent = true;
//           const newAccessToken = await refresh();
//           prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
//           return API(prevRequest);
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       API.interceptors.request.eject(requestIntercept);
//       API.interceptors.response.eject(responseIntercept);
//     };
//   }, [auth, refresh]);

//   return API;
// };
// export default useAxiosPrivate;