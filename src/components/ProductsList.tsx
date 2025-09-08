import type { Product } from "../App"

type ProductsListProps = {
    addToCart : (prodct : Product)=> void
}


function ProductsList({addToCart}:ProductsListProps) {

    const products: Product[] = [
        {id: 1, name: "Product A", price: 25},
        {id: 2, name: "Product B", price: 40},
        {id: 3, name: "Product C", price: 30}
    ]

  return (
     <div className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <ul className="flex flex-col gap-y-4 *:gap-x-6">
              {
                products.map((product)=>(
                    <li key={product.id} className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">{product.name}</h3>
                        <p className=" text-gray-400">{product.price}</p>
                        <button onClick={()=>addToCart(product)} className="bg-blue-500 hover:bgclue700
                         text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                    </li>
                ))
              }
          </ul>
        </div>
  )
}

export default ProductsList