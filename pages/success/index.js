import React, { useEffect } from "react";
import { firework } from "../../lib/utils";

const SuccessPage = () => {
  useEffect(() => {
    firework();
  }, []);

  return (
    <div className="relative mx-auto max-w-screen-md min-h-[calc(100vh-4rem)] py-24 px-3 md:px-0">
      <section class="shadow-2xl rounded-3xl">
        <div class="p-8 text-center sm:p-12">
          <p class="text-sm font-semibold tracking-widest text-pink-500 uppercase">
            Your order is on the way
          </p>

          <h5 class="mt-6 text-3xl font-bold">
            Thanks for your purchase, we're getting it ready!
          </h5>

          <a
            class="inline-block w-full py-4 mt-8 text-sm font-bold text-white bg-pink-600 rounded-full shadow-xl"
            href=""
          >
            Track Order
          </a>
        </div>
      </section>
    </div>
  );
};

export default SuccessPage;
