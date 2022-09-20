import React from "react";

const ProfilePage = () => {
  return (
    <section className="">
      <h1 className="sr-only">Profile Page</h1>
      <div className="relative mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-5 min-h-[calc(100vh-4rem)]">
          <div className="col-span-2 py-12 bg-white md:py-24">
            <div className="max-w-lg px-4 mx-auto lg:px-8">
              <form className="grid grid-cols-6 gap-4">
                <div className="col-span-3">
                  <label
                    className="block mb-1 text-sm text-gray-600"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>

                  <input
                    className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                    type="text"
                    id="first_name"
                  />
                </div>
                <div className="col-span-3">
                  <label
                    className="block mb-1 text-sm text-gray-600"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>

                  <input
                    className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                    type="text"
                    id="last_name"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    className="block mb-1 text-sm text-gray-600"
                    htmlFor="email"
                  >
                    Email
                  </label>

                  <input
                    className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                    type="email"
                    id="email"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    className="block mb-1 text-sm text-gray-600"
                    htmlFor="phone"
                  >
                    Phone
                  </label>

                  <input
                    className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
                    type="tel"
                    id="phone"
                  />
                </div>

                <fieldset className="col-span-6">
                  <legend className="block mb-1 text-sm text-gray-600">
                    Billing Address
                  </legend>

                  <div className="-space-y-px bg-white rounded-lg shadow-sm">
                    <div>
                      <label className="sr-only" htmlFor="country">
                        Country
                      </label>

                      <select
                        className="border-gray-200 relative rounded-t-lg w-full focus:z-10 text-sm p-2.5"
                        id="country"
                        name="country"
                      >
                        <option>England</option>
                        <option>Wales</option>
                        <option>Scotland</option>
                        <option>France</option>
                        <option>Belgium</option>
                        <option>Japan</option>
                      </select>
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="postal-code">
                        ZIP/Post Code
                      </label>

                      <input
                        className="border-gray-200 relative rounded-b-lg w-full focus:z-10 text-sm p-2.5 placeholder-gray-400"
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        placeholder="ZIP/Post Code"
                      />
                    </div>
                  </div>
                </fieldset>

                <div className="col-span-6">
                  <button
                    className="rounded-lg bg-black text-sm p-2.5 text-white w-full block"
                    type="submit"
                  >
                    Edit Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-3 py-12 bg-white md:py-24">
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
                        Email Address
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
                  <tr>
                
                    <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                      John Doe
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      john.doe@email.com
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      <strong className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium">
                        Cancelled
                      </strong>
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      (+44) 2198 450650
                    </td>
                    <td className="p-4 text-gray-700 whitespace-nowrap">
                      SHOP-1268-8910
                    </td>
                  </tr>

                  <tr>
                    
                    <td className="p-4 font-medium whitespace-nowrap">Jane Doe</td>
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
                  </tr>
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
