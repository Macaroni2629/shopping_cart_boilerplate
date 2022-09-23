import { useEffect, useState } from "react"
import axios from "axios";

import CartHeader from "./CartHeader"
import ProductListing from "./ProductListing"
import ToggleableForm from "./ToggleableForm"



const App = function() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("/api/products")
      setProducts(response.data)
    }

    getProducts()
  }, [])

  useEffect(() => {
    const getCartItems = async () => {
      const response = await axios.get("/api/cart")
      setCart(response.data)
    }

    getCartItems()
  }, [])

  const handleSubmit = async (newProduct, callback) => {
    try {
      const response = await axios.post("/api/products", { ...newProduct })
      setProducts(products.concat(response.data))

      if (callback) {
        callback()
      }
    } catch (e) {
      console.error(`Problem sumbiting Product: ${e}`)
    }
  }

  const handleAddingProductCart = async (product) => {
    try {
      const response = await axios.post("/api/add-to-cart", product)
      const presentOrNot = cart.find(productA => {
        return productA._id === response.data.item._id
        }
      )
      
      if (presentOrNot) {
        setCart(cart.map(product => {
          if (product._id === response.data.item._id) {
            return response.data.item
          } else {
            return product
          }
        }))
      } else {
        setCart(cart.concat(response.data.item))
      }

      setProducts(products.map(prod =>
        prod._id === product.productId
        ? response.data.product
        : prod))
    } catch (e) {
      console.error(`Problem adding product to cart: ${e}`)
    }
  }

  const handleEditingProduct = async (id, updatedProduct, callback) => {
    try {
      const response = await axios.put(`/api/products/${id}`, updatedProduct)
      setProducts(products.map(product => {
        if (product._id === id) {
          return response.data
        } else {
          return product
        }
      }))

      if (callback) {
        callback()
      }
    } catch (e) {
      console.error(`Problem Editing Product: ${e}`)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`)
      setProducts(products.filter(({ _id }) => {
        return _id !== id
      }))
    } catch (e) {
      console.error(`Problem Deleting Product: ${e}`)
    }
    
  }



  return (
    <div>
      <CartHeader cart={cart} setCart={setCart}/>
      <main>
        <ProductListing products={products} onAddToCart={handleAddingProductCart} onEdit={handleEditingProduct} onDelete={handleDelete}/>
        <ToggleableForm onSubmit={handleSubmit} />
      </main>
    </div>
  )
}

export default App