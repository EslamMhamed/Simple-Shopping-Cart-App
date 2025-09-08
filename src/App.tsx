import { useState } from "react"
import Cart from "./components/Cart"
import Header from "./components/Header"
import ProductsList from "./components/ProductsList"

export type Product ={
    id: number,
    name : string,
    price: number,

}

type CartItem = Product & {quantity : number}

export type CartItems = CartItem[] 

function App() {

  const [cartItems, setCartItems] = useState<CartItems>([])

  function addToCart(product: Product){
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item)=> item.id === product.id)
      if(existingItem){
        return prevCartItems.map((item) => item.id === product.id ? {...item, quantity: item.quantity + 1} :item)
      }else{
        return [...prevCartItems, {...product, quantity : 1}]
      }
    })

  }

  return (
    <main className="flex flex-col gap-4 text-white p-6 ">
      <Header />

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <ProductsList addToCart={addToCart} />
        <Cart />
      </div>
    </main>
  )
}


export default App 
