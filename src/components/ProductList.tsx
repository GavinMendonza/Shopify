import { useEffect, useState } from "react";
import "../css/ProductList.css";
import Product from "./Product";
import Skeleton from "./Skeleton";

interface dataModel {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

const ProductList = () => {
  const [storeData, setstoreData] = useState([]);

  const getFakestoreData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    // console.log(response);
    setstoreData(json);
  };
  useEffect(() => {
    getFakestoreData();
  }, []);
  console.log(storeData);

  return (
    <div className="container p-4 grid place-items-center gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {storeData.length == 0 && (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
      {storeData.map((values: dataModel) => {
        return (
          <Product
            key={values.id}
            productId={values.id}
            productName={values.title}
            productDesc={values.description}
            productImage={values.image}
            productPrice={values.price}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
