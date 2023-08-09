// import { useState } from "react";
// import AddToCartBtn from "./AddToCartBtn";
// import ProductDetails from "./ProductDetails";
import { AiFillStar } from "react-icons/ai";
import ProductModal from "./ProductModal";
import { IconContext } from "react-icons";

interface productProps {
  productId: number;
  productName: string;
  productImage: string;
  productDesc: string;
  productPrice: number;
}

const Product = (productProps: productProps) => {
  // const [IsShown, setIsShown] = useState(false);
  return (
    <>
      {/* <div
        // onMouseEnter={() => setIsShown(true)}
        // onMouseLeave={() => setIsShown(false)}
        className="relative text-sm  grid rounded-lg shadow-md grid-flow-row bg-slate-800 border-none max-w-[180px] ease-in"
      >
        <div className="imageContainer bg-white relative max-w-[180px] rounded-t-lg">
          <img
            className="min-w-full  aspect-square object-contain rounded-t-lg "
            src={productProps.productImage}
            alt=""
          />
          <div className="priceTag absolute bottom-0 right-0 font-semibold p-1 bg-gradient-to-l from-black w-2/3 text-end">
            {productProps.productPrice}$
          </div>
        </div>
        <div className="productData  pl-3 pt-3 pb-3 pr-1 max-w-[180px]">
          <div className="productTitle text-white line-clamp-1 font-semibold text-lg max-w-[120px] md:max-w-full">
            {productProps.productName}
          </div>
          <div className="productDesc text-xs ">
            <div className="line-clamp-2 max-w-[120px] md:max-w-full">
              {productProps.productDesc}...
            </div>
          </div>
        </div> */}
      {/* {IsShown && <AddToCartBtn />} */}
      {/* <ProductDetails /> */}
      {/* <ProductModal
          productId={productProps.productId}
          productName={productProps.productName}
          productDesc={productProps.productDesc}
          productImage={productProps.productImage}
          productPrice={productProps.productPrice}
        />
      </div> */}

      {/* ------------------------------------------------- */}

      <div className="mb-7 cursor-pointer relative text-sm  grid rounded-lg grid-flow-row border-none max-w-[180px] ease-in">
        <div className="imageContainer bg-white relative max-w-[180px] p-2 rounded-2xl">
          <img
            className="min-w-full  aspect-square object-contain rounded-t-lg "
            src={productProps.productImage}
            alt=""
          />
        </div>
        <div className="productData   ">
          <div className="productTitle mt-2 text-white truncate max-w-[145px] md:max-w-[175px] font-semibold text-lg ">
            {productProps.productName}
          </div>
          <div className="productDesc text-xs ">
            <div className="mt-0.5 flex items-center justify-between">
              <IconContext.Provider value={{ color: "orange", size: "20px" }}>
                <div className="flex text-lg items-center gap-1.5">
                  <AiFillStar />
                  {(Math.random() * (4.9 - 3.9) + 3.9).toFixed(1)}
                </div>
              </IconContext.Provider>
              <span className="  bg-green-900 font-semibold text-white p-1 rounded-md px-2">
                {productProps.productPrice}$
              </span>
            </div>
          </div>
        </div>
        <ProductModal
          productId={productProps.productId}
          productName={productProps.productName}
          productDesc={productProps.productDesc}
          productImage={productProps.productImage}
          productPrice={productProps.productPrice}
        />
      </div>
    </>
  );
};

export default Product;
