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
        return [ {...product, quantity : 1}, ...prevCartItems]
      }
    })
  }

  function increaseQuantity(id: number){
    setCartItems((prevCartItems) => prevCartItems.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item ))
  }


  // function decreaseQuantity(id: number){
  //   setCartItems(prevCartItems => prevCartItems.flatMap((item) => {
  //     if (item.id === id){
  //       if(item.quantity > 1){
  //         return {...item, quantity : item.quantity -1}
  //       }else{
  //         return []
  //       }
  //     }
  //     return item
  //   } ))
  // }

    function decreaseQuantity(id: number){
    setCartItems(prevCartItems => prevCartItems.filter(item => !(item.id === id && item.quantity === 1)).map(item => 
      item.id === id ? {...item, quantity : item.quantity -1 } : item
    ) )
  }

  function removeFromCart(id: number){
    setCartItems((prevCartItems=> prevCartItems.filter(item => (item.id !== id))))
  }

  
  return (
    <main className="flex flex-col gap-4 text-white p-6 ">
      <Header cartItems={cartItems} />

      <div className="flex flex-col md:flex-row justify-between gap-4">
        <ProductsList addToCart = {addToCart}  />
        <Cart cartItems={cartItems} increaseQuantity={increaseQuantity} 
        decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />
      </div>
    </main>
  )
}


export default App 
