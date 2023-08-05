import { useStoreData } from "../context/StoreDataContext";
import ChangeQtyBtns from "./ChangeQtyBtns";

interface CartItemProps {
  id: number;
  quantity: number;
}
const CartItem = (CartItemProps: CartItemProps) => {
  const { storeData } = useStoreData();
  const item = storeData.find((item) => item.id === CartItemProps.id)!;
  // console.log(storeData);
  // if (item == null) return null;
  // return <>{item?.title}</>;

  return (
    <>
      <div className="flex bg-slate-700 p-2 rounded-md justify-around">
        <img
          src={item?.image}
          alt={item?.title}
          className="max-w-[100px] aspect-square object-contain bg-white rounded-md"
        />
        <div className="flex flex-col gap-3  px-2 justify-center">
          <div className="font-semibold ">{item?.title}</div>
          <div>{item?.price * CartItemProps.quantity}$</div>
        </div>
        <ChangeQtyBtns productId={item?.id} quantity={CartItemProps.quantity} />
      </div>
    </>
  );
};

export default CartItem;
