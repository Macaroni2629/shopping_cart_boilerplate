import {useState} from "react"
const ToggleableForm = function({ onSubmit }) {

  const [isFormVisible, setIsFormVisible] = useState(false)
  const [productInputFilledIn, setProductInputFilledIn] = useState('')
  const [priceInputFilledIn, setPriceInputFilledIn] = useState('')
  const [quantityInputFilledIn, setQuantityInputFilledIn] = useState('0')

  const handleToggleFormVisible = (e) => {
    setIsFormVisible(!isFormVisible);
  }

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = { "title": productInputFilledIn,
      "price": priceInputFilledIn, "quantity": quantityInputFilledIn };
    
  }

  return (
    <div className={isFormVisible ? "add-form visible" : "add-form"}>
      <p><a className="button add-product-button" onClick={handleToggleFormVisible}>Add A Product</a></p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" onChange={(e) => setProductInputFilledIn(e.target.value)} value={productInputFilledIn} />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" onChange={(e) => setPriceInputFilledIn(e.target.value)}value={priceInputFilledIn} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" onChange={(e) => setQuantityInputFilledIn(e.target.value)} value={quantityInputFilledIn} />
        </div>

        <div className="actions form-actions">
          <a className="button">Add onSubmit={handleAddProduct} </a>
          <a className="button" onClick={handleToggleFormVisible}>Cancel</a>
        </div>
      </form>
    </div>
  )
}

export default ToggleableForm