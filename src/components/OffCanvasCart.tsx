// import { useShoppingCart } from "../context/ShoppingCartContext";

import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useStoreData } from "../context/StoreDataContext";
import CartItem from "./CartItem";
import Toast from "./Toast";

// const OffCanvasCart = () => {
//   const { showCart, setShowCart } = useShoppingCart();
//   return (
//     <>
//       <div className="absolute z-50 right-0 h-full shadow-sm bg-slate-200 w-3/4 md:w-1/4 ">
//         <button
//           onClick={() => {
//             setShowCart(false);
//             console.log(showCart);
//           }}
//         >
//           Close
//         </button>
//       </div>
//     </>
//   );
// };

// export default OffCanvasCart;

const OffCanvasCart = () => {
  const [showToast, setshowToast] = useState(false);
  const changeState = () => {
    setshowToast(false);
  };
  const { cartItems } = useShoppingCart();
  const { storeData } = useStoreData();

  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        {/*-------------------------- cart body------------------------------ */}
        <div className="offcanvas-body">
          <div className="flex flex-col gap-4">
            {cartItems.map((values) => {
              return <CartItem key={values.id} {...values} />;
            })}
          </div>
          <div className="text-3xl pt-4 float-right">
            Total:{" "}
            {cartItems
              .reduce((total, cartItem) => {
                const item = storeData.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
              .toFixed(2)}
            $
          </div>
          <button
            type="button"
            className="btn btn-success w-full mt-10"
            id="liveToastBtn"
            // onClick={() => setshowToast(true)}
            onClick={() => {
              setshowToast(true);
            }}
          >
            Buy Now!
          </button>

          {/* ----------------------------toast---------------------- */}
          {showToast && <Toast changeState={changeState} isPricing={false} />}
          {/* ------------------------toast ends here---------------- */}
        </div>
      </div>
    </>
  );
};

export default OffCanvasCart;
