import React from "react";
import Script from "react-load-script";
let OmiseCard;
const CreditCard = () => {
  const loadScriptHandler = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: "pkey_test_5ta3kme6y3yr4qnv3do",
      currency: "thb",
      frameLabel: "ชื่อผู้ประกอบการค้า",
      frameDescription: "รายละเอียดของผู้ประกอบการค้า",
      buttonLabel: "จ่าย 1,250",
      submitLabel: "จ่ายเลยตอนนี้",
      locale: "th",
    });
  };

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: [],
    });
    OmiseCard.configureButton("#checkout-button-credit-card");
    OmiseCard.attach();
  };
  const omiseCreditCardHandler = () => {
    OmiseCard.open({
      //   frameDescription: "testst",
      amount: 10000,
      onCreateTokenSuccess: (nonce) => {
        console.log(nonce);
        // console.log(cart);
        /* Handler on token or source creation.  Use this to submit form or send ajax request to server */
      },
      onFormClosed: () => {
        /* Handler on form closure. */
      },
    });
  };
  const clickHandler = (e) => {
    e.preventDefault();

    creditCardConfigure();
    omiseCreditCardHandler();
  };
  return (
    <div>
      <Script
        url={"https://cdn.omise.co/omise.js"}
        onLoad={loadScriptHandler}
      />
      <button
        id="checkout-button-credit-card"
        onClick={clickHandler}
        className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
        type="submit"
      >
        Pay Now With Credit Card
      </button>
    </div>
  );
};

export default CreditCard;
