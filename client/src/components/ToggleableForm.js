import {useState} from "react"

const ToggleableForm = function({ onSubmit }) {

  const [isFormVisible, setIsFormVisible] = useState(false)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('0')

  const handleToggleFormVisible = (e) => {
    setIsFormVisible(!isFormVisible);
  }

  const resetInputs = () => {
    setTitle('');
    setPrice('');
    setQuantity('0');
  }

  const handleAddProduct = () => {
    const newProduct = {
      title,
      price,
      quantity
    };

    onSubmit(newProduct, resetInputs)
  }

  return (
    <div className={isFormVisible ? "add-form visible" : "add-form"}>
      <p><a className="button add-product-button" onClick={handleToggleFormVisible}>Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" onChange={(e) => setPrice(e.target.value)}value={price} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" onChange={(e) => setQuantity(e.target.value)} value={quantity} />
        </div>

        <div className="actions form-actions">
          <a className="button" onClick={handleAddProduct}>Add</a>
          <a className="button" onClick={handleToggleFormVisible}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default ToggleableForm