import { useState } from "react"

const EditableProductForm = ({ id, name, amount, quant, onEdit, toggle }) => {
  const [title, setTitle] = useState(name)
  const [price, setPrice] = useState(amount)
  const [quantity, setQuantity] = useState(quant)

  const handleUpdate = () => {
    const updatedProduct = {
      title,
      price,
      quantity
    }

    onEdit(id, updatedProduct, toggle)
  }

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={handleUpdate}>Update</a>
          <a className="button">Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default EditableProductForm

