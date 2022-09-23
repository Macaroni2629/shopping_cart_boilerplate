import CartLayout from "./CartLayout"

const CartHeader = function({cart}) {


    return (
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          <CartLayout cart={cart}/>
          {cart.length === 0 ?
            <a className="button checkout disabled">Checkout</a> :
            <a className="button checkout">Checkout</a>}
        </div>
      </header>
    )
}

export default CartHeader
