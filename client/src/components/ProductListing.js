import EditableProduct from "./EditableProduct"

const ProductListing = function({ products, onAddToCart, onEdit }) {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product =>
        <EditableProduct
          key={product._id}
          id={product._id}
          name={product.title}
          price={product.price}
          quantity={product.quantity}
          onAddToCart={onAddToCart}
          onEdit={onEdit}
        />
      )}
    </div>
  )
}

export default ProductListing