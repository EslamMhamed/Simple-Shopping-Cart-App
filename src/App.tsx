import Cart from "./components/Cart"
import Header from "./components/Header"
import ProductsList from "./components/ProductsList"

function App() {

  return (
    <main className="flex flex-col gap-4 text-white p-6 ">
      <Header />

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <ProductsList />
        <Cart />
      </div>
    </main>
  )
}

export default App
