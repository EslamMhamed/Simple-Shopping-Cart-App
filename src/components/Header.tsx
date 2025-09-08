import type { CartItems } from "../App"

type HeadersProps = {
    cartItems: CartItems
}


function Header({cartItems}: HeadersProps) {

    const totalItems = cartItems.reduce((acc, item)=> acc + item.quantity, 0)

  return (
    <header className="flex justify-between items-center p-6 bg-gray-800 text-white rounded-lg">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <p className="bg-amber-600 text-white text-lg font-semibold py-1 px-4 rounded-full">{totalItems} {totalItems> 1 ? "Items" : "Item"}</p>
    </header>
  )
}

export default Header