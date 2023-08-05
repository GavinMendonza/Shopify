import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Badge from "./Badge";
// import { useShoppingCart } from "../context/ShoppingCartContext";
import OffCanvasCart from "./OffCanvasCart";

const Navbar = () => {
  const [close, setClose] = useState(false);
  // const { showCart, setShowCart } = useShoppingCart();

  return (
    <>
      <div className="relative w-full bg-bootstrap-black z-20 md:static md:flex  py-3 px-4 text-xl ">
        <div className="absolute top-0 left-0 bg-bootstrap-black w-full h-full md:hidden"></div>
        <div className="flex relative z-20 bg-bootstrap-black md:w-auto md:static justify-between">
          <span className="brand bg-bootstrap-black text-slate-100 inline">
            Shopify!
          </span>

          <div className="flex gap-4">
            <button
              onClick={() => {
                // setShowCart(true);
                // console.log(showCart);
              }}
              className="relative hover:bg-slate-900 duration-500 no-underline text-slate-300 md:hidden"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              Cart
              <Badge />
            </button>

            <span
              onClick={() => setClose(!close)}
              className="text-3xl cursor-pointer mx-2 md:hidden  duration-500"
            >
              {close && <AiOutlineClose />}
              {!close && <BiMenu />}
            </span>
          </div>
        </div>

        <ul
          className={`md:ml-auto bg-bootstrap-black  absolute -z-20 md:z-0 top-[-400px] md:static p-0 md:-my-2   md:flex md:items-center md:m-0 md:justify-between w-full md:w-auto left-0 px-4 transition-all ease-in duration-500 ${
            close && " top-[60px]"
          }`}
        >
          <li className="my-2 md:my-0">
            <a
              href=""
              className="p-2 hover:bg-slate-900 duration-500 no-underline text-slate-300"
            >
              Home
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a
              href=""
              className="p-2 hover:bg-slate-900 duration-500 no-underline text-slate-300"
            >
              About
            </a>
          </li>
          <li className="my-2 md:my-0">
            <button
              onClick={() => {
                // setShowCart(true);
                // console.log(showCart);
              }}
              className="relative hover:bg-slate-900 p-2 duration-500 no-underline text-slate-300 hidden md:block "
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              Cart
              <Badge />
            </button>
          </li>
        </ul>
      </div>
      <OffCanvasCart />
      {/* {showCart && <OffCanvasCart />} */}
    </>
  );
};

export default Navbar;
