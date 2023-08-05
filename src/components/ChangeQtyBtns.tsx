import { useShoppingCart } from "../context/ShoppingCartContext";
interface modalProps {
  productId: number;
  quantity: number;
}

const ChangeQtyBtns = (modalProps: modalProps) => {
  const { decreaseCartQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();
  return (
    <>
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
          {modalProps.quantity}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => increaseCartQuantity(modalProps.productId)}
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
    </>
  );
};

export default ChangeQtyBtns;
