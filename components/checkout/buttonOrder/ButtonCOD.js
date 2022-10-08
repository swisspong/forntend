import React from "react";
import { useAddOrderCODNoAuthMutation } from "../../../hooks/usePayment";

const ButtonCOD = ({ values }) => {
  const { mutate } = useAddOrderCODNoAuthMutation();
  return (
    <button
      className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
      onClick={() => {
        mutate(values)
      }}
    >
      Cash On Delivery
    </button>
  );
};

export default ButtonCOD;
