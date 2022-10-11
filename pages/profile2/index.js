import Link from "next/link";
import React from "react";
import { useOrderQuery } from "../../hooks/useUser";

const ProfilePage = () => {
  const { isLoading, data } = useOrderQuery();
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
    return <div>Loading...</div>;
  }
  return (
    <section className="">
      <h1 className="sr-only">Profile Page</h1>
      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-5 min-h-[calc(100vh-4rem)]">
          <div className="col-span-5 py-12 bg-white md:py-24">
            <div className="overflow-x-auto ">
              <table className="min-w-full text-sm divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                      <div className="flex items-center">
                        Name
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1.5 text-gray-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                      <div className="flex items-center">
                        Payment Method
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1.5 text-gray-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                      <div className="flex items-center">
                        Status
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1.5 text-gray-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                      <div className="flex items-center">
                        Phone Number
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1.5 text-gray-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </th>
                    <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                      <div className="flex items-center">
                        Order Number
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-4 h-4 ml-1.5 text-gray-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  {data.map((row) => (
                    <Link href={`/order/${row.id}`}>
                      <tr>
                        <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                          {/* John Doe */}
                          {row.recipientName}
                        </td>
                        <td className="p-4 text-gray-700 whitespace-nowrap">
                          {/* john.doe@email.com */}
                          {row.paymentMethod === "COD"
                            ? "จ่ายเงินปลายทาง"
                            : row.paymentMethod === "SLIP" &&
                              "โอนผ่านธนาคารแล้วแนบสลิป"}
                        </td>
                        <td className="p-4 text-gray-700 whitespace-nowrap">
                          {row.status === "AUTHORIZE" ? (
                            <strong class="bg-amber-100 text-amber-700 px-3 py-1.5 rounded text-xs font-medium">
                              Authorize
                            </strong>
                          ) : (
                            "PENDING" && (
                              <strong class="bg-amber-100 text-amber-700 px-3 py-1.5 rounded text-xs font-medium">
                                Pending
                              </strong>
                            )
                          )}
                          {/* <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
                          Cancelled
                        </strong> */}
                        </td>
                        <td className="p-4 text-gray-700 whitespace-nowrap">
                          {/* (+44) 2198 450650 */}

                          {phoneFormat(row.phone)}
                        </td>
                        <td className="p-4 text-gray-700 whitespace-nowrap">
                          {/* SHOP-1268-8910 */}
                          ORDER-{row.id}
                        </td>
                      </tr>
                    </Link>
                  ))}

                  {/* <tr>
                    <td className="p-4 font-medium whitespace-nowrap">
                      Jane Doe
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      jane.doe@email.com
                    </td>
                    <td class="p-4 whitespace-nowrap">
                      <strong className="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium">
                        Paid
                      </strong>
                    </td>
                    <td class="p-4 text-gray-700 whitespace-nowrap">
                      (+44) 1928 450650
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      SHOP-4235-1526
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 font-medium whitespace-nowrap">
                      Gary Barlow
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      gary.barlow@email.com
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      <strong class="bg-amber-100 text-amber-700 px-3 py-1.5 rounded text-xs font-medium">
                        Partially Refunded
                      </strong>
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      (+44) 2819 450650
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      SHOP-1573-2468
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
