
function Cart() {
  return (
        <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
          <p className="text-gray-400 my-4">Your cart is empty.</p>
          <ul>
            <li className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-medium">Produt A</h3>
                <p className="text-sm text-gray-400">$25 x 5</p>
              </div>
              <div className="flex items-center gap-2 transition-colors">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded">+</button>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded">-</button>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">Remove</button>
              </div>
              <p className="text-sm font-semibold text-blue-400">$125</p>
            </li>
          </ul>
          <h3 className="text-lg font-bold">Total: $125</h3>
        </div>
  )
}

export default Cart