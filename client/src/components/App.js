import CartHeader from "./CartHeader"
import ProductListing from "./ProductListing"
import ToggleableForm from "./ToggleableForm"

const App = function() {
  return (
    <div>
      <CartHeader />
      <main>
        <ProductListing />
        <ToggleableForm />
      </main>
    </div>
  )
}

export default App