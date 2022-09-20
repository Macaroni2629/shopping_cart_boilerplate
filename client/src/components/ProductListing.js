import EditableProduct from "./EditableProduct"

const ProductListing = function() {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <EditableProduct name="Amazon Kindle E-reader" price="$79.99" quantity="5"/>
      <EditableProduct name="Apple 10.5-Inch iPad Pro" price="$649.99" quantity="2"/>
      <EditableProduct name="Yamaha Portable Keyboard" price="$155.99" quantity="0"/>
    </div>

  )
}

export default ProductListing