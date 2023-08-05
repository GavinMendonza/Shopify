import { useShoppingCart } from "../context/ShoppingCartContext";

const Badge = () => {
  const { cartQuantity } = useShoppingCart();
  return (
    <div className="absolute bg-pink-500 p-1 px-2 -top-2 left-9 md:-top-1  md:left-11 text-xs rounded-lg ">
      {"" + cartQuantity}
    </div>
  );
};

export default Badge;
