const calcTotal = (cart) =>
  cart.reduce((total, item) =>
    total += item.price
  , 0)

const CartLayout = ({cart}) => {
  const total = calcTotal(cart)

  if (cart.length === 0) {
    return <p>Your cart is empty</p>
  } else {
    return (
      <table className="cart-items">
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {cart.map(item =>
          (<tr key={item._id}>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>${item.price}</td>
          </tr>
        ))}
        <tr>
          <td colSpan="3" className="total">Total: ${total}</td>
        </tr>
      </table>
    )
  }
}

export default CartLayout