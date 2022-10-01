import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { useEmptyCartMutation } from "../../hooks/useCart";

export default function DialogCartError({ cartItemList }) {
  const { mutate: emptyCart } = useEmptyCartMutation();
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    emptyCart();
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        onClose={() => setIsOpen(true)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Product data is change
                </Dialog.Title>
                <div className="mt-2">
                  {cartItemList.map((cartItem) => (
                    <li class="flex items-center justify-between py-4">
                      <div class="flex items-start">
                        <img
                          alt="Lettuce"
                          src={cartItem.product.productImage[0].image.path}
                          class="flex-shrink-0 object-cover w-16 h-16 rounded-lg"
                        />

                        <div class="ml-4">
                          <p class="text-sm">{cartItem.product.name}</p>

                          <Disclosure>
                            {({ open }) => (
                              <>
                                <div>
                                  <Disclosure.Button className="flex justify-start items-center">
                                    <legend className="text-xs">Detail</legend>
                                    <ChevronUpIcon
                                      className={`${
                                        open ? "transform rotate-180" : ""
                                      } w-5 h-5 text-gray-500 `}
                                    />
                                  </Disclosure.Button>
                                </div>
                                <Disclosure.Panel>
                                  <dl className="ml-1 mt-1 space-y-1 text-xs text-gray-500">
                                    {cartItem.cartItemDetail.map(
                                      (cartItemDetail) => (
                                        <div>
                                          <dt className="inline">
                                            {cartItemDetail.optionGroup.name}:
                                          </dt>
                                          <dd className="inline">
                                            {cartItemDetail.option.name}
                                          </dd>
                                        </div>
                                      )
                                    )}
                                  </dl>
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                      </div>

                      <div>
                        <p class="text-sm">
                          ${Number(cartItem.product.price).toFixed(2)}
                          <small class="text-gray-500">
                            x{cartItem.quantity}
                          </small>
                        </p>
                      </div>
                    </li>
                  ))}
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    System will delete all product from your cart automatic.
                    Please select product again
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
