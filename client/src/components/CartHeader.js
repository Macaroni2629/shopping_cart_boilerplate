const CartHeader = function({total}) {
    return (
      <header>
        <h1>The Shop!</h1>
        <div className="cart">
          <h2>Your Cart</h2>
          <p>Your cart is empty</p>
          <p>Total: ${total}</p>
          <a className="button checkout disabled">Checkout</a>
        </div>
      </header>
    )
}

export default CartHeader