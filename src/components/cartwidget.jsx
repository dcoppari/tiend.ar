import iconCart from "../assets/cart.svg";

export function CartWidget() {
  return (
    <div className="col cart-widget">
      <img src={iconCart} />
      <span>(0)</span>
    </div>
  );
}
