const EditableProduct = function({ id, name, price, quantity, onAddToCart}) {
  const handleCart = () => {
    onAddToCart({ productId: id })
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{name}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <a className="button add-to-cart" onClick={handleCart}>Add to Cart</a>
          <a className="button edit">Edit</a>
        </div>
        <a className="delete-button"><span>X</span></a>
      </div>
    </div>
  )
}

export default EditableProduct