import { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_Product, cartItem, removeFromCart } = useContext(ShopContext);

  // Calculate total prices
  const subTotal = Object.keys(cartItem).reduce((total, id) => {
    const itemCount = cartItem[id];
    const product = all_Product.find((product) => product.id === Number(id));
    return total + (product ? product.new_price * itemCount : 0);
  }, 0);

  const shippingFee = 0; // Assume free shipping for simplicity
  const total = subTotal + shippingFee;

  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_Product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartItem-format cartItems-format-main">
                <img src={e.image} alt="" className="cart-icon-product-icon" />
                <p>{e.name}</p>
                <p>{e.new_price}৳</p>
                <button className="cartItem-quantity">{cartItem[e.id]}</button>
                <p>{e.new_price * cartItem[e.id]}৳</p>
                <img className="cartitem-remove-icon" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Sub Total</p>
              <p>{subTotal} ৳</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>{shippingFee} ৳</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>{total} ৳</h3>
            </div>
          </div>
          <button className="cartitem-total-button">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default CartItems;
