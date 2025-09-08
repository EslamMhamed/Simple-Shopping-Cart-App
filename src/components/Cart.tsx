import type { CartItems } from "../App"

type CartProps = {
    cartItems : CartItems,
    increaseQuantity : (id:number)=> void,
    decreaseQuantity : (id:number)=> void,
    removeFromCart : (id:number)=> void,
}


function Cart({cartItems, increaseQuantity, decreaseQuantity, removeFromCart}: CartProps) {
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity) , 0 )
  return (
        <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
          
          {cartItems.length === 0 ? (
            <p className="text-gray-400 my-4">Your cart is empty.</p>
          ) :
          <ul>
            {
            cartItems.map(item => (
            <li className="flex justify-between items-center mb-4" key={item.id}>
                <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-400">${item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center gap-2 transition-colors">
                    <button onClick={()=> increaseQuantity(item.id)}
                     className="bg-green-600 hover:bg-green-700 `text-white font-bold py-1 px-3 rounded">+</button>
                    <button onClick={()=> decreaseQuantity(item.id)} 
                     className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded">-</button>
                    <button onClick={()=> removeFromCart(item.id)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">Remove</button>
                </div>
                <p className="text-sm font-semibold text-blue-400">${item.price * item.quantity}</p>
            </li>))
            }
          </ul>}
          <h3 className="text-lg font-bold">Total: ${total}</h3>
        </div>
  )
}

export default Cart