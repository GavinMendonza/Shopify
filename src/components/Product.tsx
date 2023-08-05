// import { useState } from "react";
// import AddToCartBtn from "./AddToCartBtn";
// import ProductDetails from "./ProductDetails";
import ProductModal from "./ProductModal";

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
      <div
        // onMouseEnter={() => setIsShown(true)}
        // onMouseLeave={() => setIsShown(false)}
        className="relative text-sm  grid rounded-lg shadow-md grid-flow-row bg-slate-800 border-none max-w-[180px] ease-in"
      >
        <div className="imageContainer bg-white relative max-w-[180px] rounded-t-lg">
          <img
            className="min-w-full  aspect-square object-contain rounded-t-lg"
            src={productProps.productImage}
            alt=""
          />
          <div className="priceTag absolute bottom-0 right-0 font-semibold p-1 bg-gradient-to-l from-black w-2/3 text-end">
            {productProps.productPrice}$
          </div>
        </div>
        <div className="productData  pl-3 pt-3 pb-3 pr-0">
          <div className="productTitle line-clamp-1 font-semibold text-lg">
            {productProps.productName}
          </div>
          <div className="productDesc">Very nice shoes!</div>
        </div>
        {/* {IsShown && <AddToCartBtn />} */}
        {/* <ProductDetails /> */}
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
