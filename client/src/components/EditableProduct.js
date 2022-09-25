import { useState } from "react"
import EditableProductForm from "./EditableProductForm"

const EditableProduct = function({ id, name, price, quantity, onAddToCart, onEdit, onDelete }) {
  const [edit, setEdit] = useState(false)

  const handleCart = () => {
    onAddToCart({ productId: id })
  }

  const toggleEdit = () => {
    setEdit(!edit)
  }

  return (
    <div className="product">
      <div className="product-details">
        <h3>{name}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
            { quantity ? <a className="button add-to-cart" onClick={handleCart}>Add to Cart</a> :
                <a className="button add-to-cart disabled" onClick={handleCart}>Add to Cart</a>
            }
          <a className="button edit" onClick={toggleEdit}>Edit</a>
        </div>
        <a className="delete-button" onClick={() => onDelete(id)}><span>X</span></a>
      </div>
      {edit ? <EditableProductForm
                id={id}
                amount={price}
                name={name}
                quant={quantity}
                onEdit={onEdit}
                toggle={toggleEdit} /> : ""
                }

    </div>
  )
}

export default EditableProduct