import { PhoneIcon, UserIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Stepper from "../../components/order/Stepper";
import UploadSlipPreview from "../../components/order/UploadSlipPreview";
import { selectCredential } from "../../features/auth/authSlice";
import { useOrderByIdQuery } from "../../hooks/useUser";

const Order = () => {
  const router = useRouter();
  const { orderId } = router.query;
  const { isLoading, data } = useOrderByIdQuery(orderId);
  const credential = useSelector(selectCredential);
  const phoneFormat = (input) => {
    if (!input || isNaN(input))
      return `input must be a number was sent ${input}`;
    if (typeof input !== "string") input = input.toString();
    if (input.length === 10) {
      return input.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    } else if (input.length < 10) {
      return "was not supplied enough numbers please pass a 10 digit number";
    } else if (input.length > 10) {
      return "was supplied too many numbers please pass a 10 digit number";
    } else {
      return "something went wrong";
    }
  };
  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
          Order #13432
        </h1>
        <p className="text-base font-medium leading-6 text-gray-600">
          21st Mart 2021 at 10:34 PM
        </p>
      </div>

      <Stepper status={data.status}/>

      <div className="mt-10 flex flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
              Customer’s Cart
            </p>
            {data.orderItem.map((item) => (
              <div className="mt-6 flex flex-row justify-start items-start space-x-6 w-full h-full">
                <div className="pb-0  h-full w-40">
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      className="object-cover"
                      // src="https://images.pexels.com/photos/9420589/pexels-photo-9420589.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              
                      src={item.url}
                      alt="dress"
                    />
                  </div>
                </div>
                <div className=" flex border-b border-gray-200 justify-between items-start w-full  pb-0   space-y-0 h-full">
                  <div className="w-full  h-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-2xl font-semibold leading-6 text-gray-800">
                      {item.name}
                    </h3>
                    {/* <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">Style: </span> Italic
                        Minimal Design
                      </p>
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">Size: </span> Small
                      </p>
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">Color: </span> Light
                        Blue
                      </p>
                    </div> */}
                  </div>
                  <div className="flex justify-between space-x-8 items-start h-full w-full">
                    <p className="text-lg leading-6">
                      {Number(item.price).toFixed(2)}
                      {/* <span className="text-red-300 line-through"> $45.00</span> */}
                    </p>
                    <p className="text-lg leading-6 text-gray-800">
                      {item.quantity}
                    </p>
                    <p className="text-lg font-semibold leading-6 text-gray-800">
                      {Number(item.subTotalPrice).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Summary
              </h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">$56.00</p>
                </div>
                {/* <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">
                    Discount{" "}
                    <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">
                      STUDENT
                    </span>
                  </p>
                  <p className="text-base leading-4 text-gray-600">
                    -$28.00 (50%)
                  </p>
                </div> */}
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">$8.00</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  $36.00
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Payment Method
              </h3>

              <div className="flex justify-between items-start w-full">
                <div className="flex justify-center items-center space-x-4">
                  <div class="w-8 h-8">
                    <img
                      class="w-full h-full"
                      alt="logo"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzmIWKwOLnmOD35iG8NrI8Sr96W2BCeejV-vdE3yhFVg&s"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-center">
                    <p className="text-lg leading-6 font-semibold text-gray-800">
                      John Doe
                      <br />
                      <span className="font-normal">xxx-xxxx-xxx-xxx</span>
                    </p>
                  </div>
                </div>
              </div>

              <UploadSlipPreview orderId={orderId}/>
            </div>
          </div>
        </div>
        {/* <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
          <h3 className="text-xl font-semibold leading-5 text-gray-800">
            Customer
          </h3>

          <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
            <div className="flex flex-col justify-start items-start flex-shrink-0">
              <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
             
                <UserIcon className="w-12" />
                <div className=" flex justify-start items-start flex-col space-y-2">
                  <p className="text-base font-semibold leading-4 text-left text-gray-800">
                    {data.recipientName}
                  </p>
                  <p className="text-sm leading-5 text-gray-600">
                    10 Previous Orders
                  </p>
                </div>
              </div>

              <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 7L12 13L21 7"
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="cursor-pointer text-sm leading-5 text-gray-800">
                  {credential.user.email}
                </p>
              </div>
              <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#1F2937"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <p className="cursor-pointer text-sm leading-5 text-gray-800">
                  {phoneFormat(data.phone)}
                </p>
              </div>
            </div>
            <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
              <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                  <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                    Shipping Address
                  </p>
                  <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                    {data.address}
                  </p>
                </div>
              </div>

              <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                <button className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">
                  Edit Details
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Order;
