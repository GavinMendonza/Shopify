import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface modalProps {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  productDesc: string;
}

export default function ProductModal(modalProps: modalProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(modalProps.productId);
  // const quantity = 1;
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="absolute h-full w-full">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-transparent min-w-full min-h-full bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        ></button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                  <div className="imageContainer bg-white relative rounded-t-lg  min-w-full">
                    <img
                      className="max-w-[180px] mx-auto  aspect-square object-contain rounded-t-lg "
                      src={modalProps.productImage}
                      alt=""
                    />
                    <div className="priceTag absolute bottom-0 right-0 font-semibold p-1 bg-gradient-to-l from-black w-1/3 text-end">
                      {modalProps.productPrice}$
                    </div>
                  </div>

                  <Dialog.Title
                    as="h3"
                    className="text-base font-medium leading-6 text-gray-900"
                  >
                    {modalProps.productName}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-xs text-gray-500">
                      {modalProps.productDesc}
                    </p>
                  </div>

                  <div className="mt-4">
                    {quantity === 0 ? (
                      <button
                        type="button"
                        className="min-w-full inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-800 focus-visible:ring-offset-2"
                        onClick={() =>
                          increaseCartQuantity(modalProps.productId)
                        }
                      >
                        ADD TO CART
                      </button>
                    ) : (
                      <div className="flex gap-2 justify-center items-center flex-col">
                        <div className="flex gap-2 items-center">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                              decreaseCartQuantity(modalProps.productId);
                            }}
                          >
                            -
                          </button>
                          {quantity}
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() =>
                              increaseCartQuantity(modalProps.productId)
                            }
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={() => removeFromCart(modalProps.productId)}
                        >
                          Remove
                        </button>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
