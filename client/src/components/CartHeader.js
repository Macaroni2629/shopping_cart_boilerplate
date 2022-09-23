import axios from "axios"
import CartLayout from "./CartLayout"

const CartHeader = function({cart, setCart}) {

  const handleCheckout = async () => {
    await axios.post("/api/checkout")
    setCart([])
  }
    return (
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          <CartLayout cart={cart}/>
          {cart.length === 0 ?
            <a className="button checkout disabled">Checkout</a> :
            <a className="button checkout" onClick={handleCheckout}>Checkout</a>}
        </div>
      </header>
    )
}

export default CartHeader
