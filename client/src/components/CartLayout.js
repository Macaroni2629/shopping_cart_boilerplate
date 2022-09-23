const calcTotal = (cart) =>
  cart.reduce((total, item) =>
    total += item.quantity * item.price
  , 0)

const CartLayout = ({cart}) => {
  const total = calcTotal(cart)

  if (cart.length === 0) {
    return <p>Your cart is empty</p>
  } else {
    return (
      <table className="cart-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item =>
            (<tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="total">Total: ${total}</td>
          </tr>
        </tfoot>
      </table>
    )
  }
}

export default CartLayout